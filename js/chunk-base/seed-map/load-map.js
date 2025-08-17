document.addEventListener("DOMContentLoaded", function () {
    const mapContainer = document.querySelector(".map-canvas");
    if (!mapContainer) {
        console.error("未找到地图容器 '.map-canvas'");
        return;
    }

    // --- 1. 创建并插入 Canvas ---
    const canvas = document.createElement("canvas");
    canvas.id = "map-canvas";
    canvas.setAttribute("role", "img");
    canvas.setAttribute("aria-label", "A simplified test map");
    // 移除 data-tippy-content，因为我们没有引入 tippy.js
    // canvas.setAttribute('data-tippy-content', '');
    mapContainer.appendChild(canvas);

    // --- 2. 获取 2D 上下文 ---
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        console.error("无法获取 Canvas 2D 上下文");
        return; // 防止后续错误
    }

    // --- 3. 初始化状态和配置 ---
    const state = {
        width: 0,
        height: 0,
        dpr: window.devicePixelRatio || 1,
        centerX: 0,
        centerY: 0,
        scale: 16, // 每个网格单元的像素大小
        markerX: null,
        markerY: null,
    };

    // --- 4. 核心绘制函数 ---
    function redraw() {
        const containerRect = mapContainer.getBoundingClientRect();
        const newWidth = containerRect.width;
        const newHeight = containerRect.height;

        // 检查尺寸是否发生变化
        if (
            newWidth !== state.width ||
            newHeight !== state.height ||
            state.dpr !== (window.devicePixelRatio || 1)
        ) {
            state.width = newWidth;
            state.height = newHeight;
            state.dpr = window.devicePixelRatio || 1;

            // 设置 Canvas 的实际像素大小 (考虑 DPR)
            canvas.width = state.width * state.dpr;
            canvas.height = state.height * state.dpr;

            // 设置 Canvas 的 CSS 显示大小
            canvas.style.width = state.width + "px";
            canvas.style.height = state.height + "px";

            // 缩放绘图上下文以匹配 DPR，确保绘制清晰
            ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
        }

        // 清空画布
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // --- 绘制内容 ---
        const gridSize = state.scale;
        const offsetX = (state.width % gridSize) / 2; // 居中网格
        const offsetY = (state.height % gridSize) / 2;

        // 绘制浅灰色背景
        ctx.fillStyle = "#f0f0f0";
        ctx.fillRect(0, 0, state.width, state.height);

        // 绘制网格线
        ctx.strokeStyle = "#ccc";
        ctx.lineWidth = 1;
        ctx.beginPath();

        // 垂直线
        for (let x = offsetX; x <= state.width; x += gridSize) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, state.height);
        }
        // 水平线
        for (let y = offsetY; y <= state.height; y += gridSize) {
            ctx.moveTo(0, y);
            ctx.lineTo(state.width, y);
        }
        ctx.stroke();

        // 绘制中心点 (红色十字)
        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;
        ctx.beginPath();
        const centerScreenX = state.width / 2;
        const centerScreenY = state.height / 2;
        ctx.moveTo(centerScreenX - 10, centerScreenY);
        ctx.lineTo(centerScreenX + 10, centerScreenY);
        ctx.moveTo(centerScreenX, centerScreenY - 10);
        ctx.lineTo(centerScreenX, centerScreenY + 10);
        ctx.stroke();

        // 绘制用户标记点 (如果存在)
        if (state.markerX !== null && state.markerY !== null) {
            ctx.fillStyle = "blue";
            ctx.beginPath();
            // 将标记的屏幕坐标转换为相对于画布的坐标进行绘制
            ctx.arc(state.markerX, state.markerY, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "white";
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        console.log("地图已重绘");
    }

    // --- 5. 交互处理 ---
    function handleCanvasClick(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // 更新标记点坐标
        state.markerX = x;
        state.markerY = y;

        console.log(`点击设置标记点: (${x.toFixed(2)}, ${y.toFixed(2)})`);
        redraw(); // 重绘以显示新标记
    }

    canvas.addEventListener("click", handleCanvasClick);

    // --- 6. 响应式调整 ---
    let resizeTimeout;
    function handleResize() {
        // 使用防抖优化性能
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(redraw, 100);
    }
    window.addEventListener("resize", handleResize);

    // --- 7. 初始绘制 ---
    redraw();

    // 可选：暴露一些方法到全局（用于调试或外部调用）
    window.TestMap = {
        redraw: redraw,
        state: state,
    };

    console.log("简化版地图脚本初始化完成");
});
