OriginBiomesInfo: str = """
海洋 Ocean：海域顶层高度默认为63
平原Plains：生成村庄概率比较大
沙漠 Desert：可能会生成沙漠神殿和沙漠水井
风袭丘陵 Windswept Hills：挖掘绿宝石原矿高海拔生物群系之一
森林 Forest：主要是橡树和白桦树混合林，少有点杜鹃树
针叶林 Taiga：一种常见且比较寒冷的生物群系，主要植物是针叶树、松树和浆果，还会生成狐狸
沼泽 Swamp：生成藤蔓、荷叶和女巫小屋的生物群系
河流 River：通常会作为两个生物群系的边界
雪原 Snowy Plains：覆雪生物群系，会生成北极熊，夜晚生成流浪者（旧称：流髑）
冻河 Frozen River：会在雪原或部分针叶林之间生成，还有可以生成甘蔗、雪屋、村庄等
雪山 Snowy Mountains：雪屋和村庄不会生成，而这类地形于Java版1.18被并入雪原
蘑菇岛 Mushroom Fields：通常以单一岛屿的形式出现，极少会与陆地连接，岛屿通常被深海所围绕，这里是哞菇唯一生成群系，且夜晚不会生怪
蘑菇岛岸Mushroom Fields Shore：这类地形于Java版1.18被并入蘑菇岛
沙滩 Beach：通常是陆地到海洋的一种过渡生物群系
沙漠丘陵 Desert Hills：是普通沙漠的丘陵变种，具有较高的地形，并且比其他丘陵生物群系略微更高一些。这类地形于Java版1.18被并入沙漠
繁茂的丘陵 Wooded Hills：变种类似于普通的森林，但这里的地形要高一些、崎岖一些，因此不那么适合作为庇护所。狼也可能在这里生成。这类地形于Java版1.18被并入森林
针叶林丘陵 Taiga Hills：与普通的针叶林相比地形更陡峭。更高的高度使降雪更容易出现在这种变种中，通常在树顶或山峰处。这类地形于Java版1.18被并入针叶林
山地边缘 Mountain Edge：在Java版1.7.2前用于使其他生物群系平滑地过渡到风袭丘陵（旧称山地）。这种生物群系自Java版1.7.2起不再自然生成。随着新的山地生物群系的加入，这类地形于Java版1.18被移除
丛林 Jungle：生成豹猫、鹦鹉等动物，还会生成丛林神殿结构，还会有可可豆生成
丛林丘陵 Jungle Hills：是丛林的丘陵变种，地形普遍为坡度较大的山丘。这类地形于Java版1.18被并入丛林
稀疏丛林Sparse Jungle：通常最为丛林群系过渡地带
深海 Deep Ocean：是一种较深的海洋变种。深海的深度可超过30格，为常规海洋的两倍。海底主要覆盖着沙砾。这里可以生成海底神殿
石岸 Stony Shore：是一种沙滩变种，偶尔会代替沙滩生成。石岸完全由石头组成，带有一些沙砾区域，并且通常会在水边生成陡峭的地形
积雪沙滩 Snowy Beach：是一种覆雪的沙滩变种，在雪原、积雪针叶林或其变种与海洋接壤的地方生成
桦木森林：主要生成桦树这一种树种，在未来1.21.5版本中，会生成野花簇
桦木森林丘陵 Birch Forest Hills：类似于其他丘陵生物群系，以更高更崎岖的地形为特点，其他方面如同普通的桦木森林一样。这类地形于Java版1.18被并入桦木森林
黑森林 Dark Forest：会生成林地府邸
积雪的针叶林 Snowy Taiga：与普通的针叶林一样，地势相对平坦，拥有大片的云杉树，但地表被雪覆盖
积雪的针叶林丘陵 Snowy Taiga Hills：这类地形于Java版1.18被并入积雪针叶林
原始松木针叶林 Old Growth Pine Taiga：类似于原始松木针叶林，但云杉体型较小，且更为密集，较高的云杉树干会被树叶包裹
巨型针叶林丘陵 Giant Tree Taiga Hills：是原始松木针叶林（旧称巨型针叶林）的丘陵变种，地形普遍为坡度较大的山丘。这类地形于Java版1.18被并入原始松木针叶林
风袭森林 Windswept Foest：地形特征与风袭丘陵生物群系类似，山势较为陡峭，但会密集地生成大量的草丛与云杉
热带草原 Savanna：通常会与沙漠或恶地接壤
热带高原Savanna Plateau：类似于普通的热带草原，但地势较高，在海拔20-30格方块以上地形会逐渐平稳。
恶地 Bandlands：由陶瓦、染色陶瓦构成，且像沙漠一样遍布枯萎的灌木。红沙取代了普通的沙子，偶尔会生成仙人掌
疏林恶地 Wooded Bandlands：是一种含有树木的恶地变种。疏林恶地的顶层区域高于Y=100时会被草方块和砂土替换，甚至有橡树生长。
恶地高原 Badlands Plateau（已并入）：由恶地形成的变种，能够形成不同的色层。这些山丘能够拔高到比海平面高20～30个方块的高度，并且顶部平坦，很像真实的高原，这类地形于Java版1.18被并入恶地
暖水海洋 Warm Ocean：是一种温暖的海洋变种。这里的水呈现浅绿色。类似于温水海洋，暖水海洋的海床由沙子组成
暖水深海 Deep Warm Ocean：类似于暖水海洋，深度是其两倍，但没有珊瑚礁和海泡菜。由于它们是深海变种，它们可以生成海底神殿。这类地形于Java版1.18被并入暖水海洋
温水海洋 Lukewarm Ocean：比较温暖的一种海洋生物群系，水体表面呈浅青色，海床由沙子、少许泥土和黏土组成，在海底上方会生成海带和海草。鳕鱼会在该生物群系中生成
温水深海 Deep Lukewarm Ocean：类似于温水海洋生物群系，但深度是其两倍。海底神殿会在此生物群系中生成
冷水海洋 Cold Ocean：寒冷的海洋生物群系，水体表面呈深蓝色，海床主要由沙砾组成，间或点缀着三三两两的泥土。鲑鱼会在该生物群系中生成
冷水深海 Deep Cold Ocean：类似于冷水海洋生物群系，但深度是其两倍。海底神殿会在此生物群系中生成
冻洋 Frozen Ocean：表面被冰冻的海洋生物群系，水体表面呈深紫色，海床主要由沙砾组成
冻洋深海 Deep Frozen Ocean：类似于冻洋，但深度是其两倍，海床由沙砾构成。该生物群系的水体表面会被星罗棋布的蓝冰冰山覆盖
竹林 Bamboo Jungle：此生物群系的地表由草方块和成片的灰化土组成，会自然生成大型丛林树和大型橡树，但密集程度相比于稀疏丛林低很多，在其间隙会生成大量竹子
竹林丘陵 Bamboo Jungle Hills：是竹林的丘陵变种，地形普遍为坡度较大的山丘。这类地形于Java版1.18被并入竹林
向日葵平原 Sunflower Plains：一种会生成漫山遍野的向日葵的平原生物群系
沙漠湖泊 Desert Lakes：是沙漠的一种不常见的变种，以湖泊为特征，这使得它成为宝贵的沙漠水源
风袭沙砾丘陵 Windswept Gravelly Hills：是一种地表有较多沙砾的风袭丘陵变种
繁华森林 Flower Forest：花儿很多，盛产郁丁香花
针叶林山地 Taiga Mountains：比针叶林丘陵更加陡峭，其高度峰值频繁地穿过降雪线
沼泽丘陵 Swamp Hills：是在平坦的沼泽之间上升的山坡地形。这类地形于Java版1.18被并入沼泽
冰刺之地 Ice Spikes：是一种含有大量冰刺的雪原变种。与雪原相比，这里所有的草方块都被雪块替代
丛林变种 Modified Jungle：是丛林的峭壁类变种，地形多为高耸的断崖，比丛林丘陵更陡峭
丛林边缘变种 Modified Jungle Edge：不仅是游戏中稀有的生物群系，还是面积小的生物群系之一
原始桦木森林 Old Growth Brich Forest：是一种会生成高白桦的桦木森林变种
高大桦木丘陵 Tall Brich Hills：这类地形于Java版1.18被并入原始桦木森林
黑森林丘陵 Dark Forest Hills：这类地形于Java版1.18被并入黑森林
积雪的针叶林山地 Snowy Taiga Mountains：这类地形于Java版1.18被并入积雪针叶林
原始云杉针叶林 Old Growth Spruce Taiga：比原始松木针叶林更为枝繁叶茂，因为这里长满了带有高大树冠的大型云杉
巨型云杉针叶林丘陵：是原始松木针叶林（旧称巨型针叶林）的丘陵变种，地形普遍为坡度较大的山丘。这类地形于Java版1.18被并入原始松木针叶林
沙砾山地 Gravelly Mountains+：是一种稀有的风袭森林（旧称繁茂的山地）变种。唯一区别在于，它会罕见地在沙漠湖泊与积雪生物群系的相接处出现。这类地形于Java版1.18被并入风袭沙砾丘陵
风袭热带草原 Windswept Savanna：是一类稀有且地形混乱的热带草原变种。它充满了极其陡峭的山脉、高大的山峰、巨大的悬崖、飘浮的岛屿、产生落差较高的水和熔岩瀑布，地形比山地更高更粗糙，与其他平坦的热带草原形成鲜明的对比
破碎的热带高原 Shattered Savanna Plateae：类似于风袭热带草原（旧称破碎的热带草原），拥有非常陡峭的山脉和悬崖，使其成为一个难以探索的群系
风蚀恶地Eroded Badlands：是恶地的变种。但陶瓦岩柱被明显分割而高耸林立，难以攀登
繁茂的恶地高原变种 Modified Wooded Badlands Plateau：与恶地高原变种相似，具有相对风蚀的外貌，更小的高原和不规则的地形，因此橡树在其表面更少地生成
恶地高原变种 Modified Badlands Plateau：相较于普通的恶地高原而言，可以形成更小的高原和更加险峻的地势，以此来模拟长期被风蚀的大片高原
红树林沼泽 Mangrove Swamp：会在较温暖的区域生成的沼泽变种，会生成大量的，树叶极为茂密的红树
草甸 Meadow：对平缓的山地，地表由草方块组成。地表上方只会生成草丛、大量1格高的花，以及罕见的带有蜂巢的橡树或桦树
樱花树林 Cherry Grove：相对平缓的山地，地表由草方块组成，生长着大量樱花树和只能在此生物群系发现的粉红色花簇
积雪山坡 Snowy Slopes：表面完全被积雪、雪块和细雪覆盖的山地，其中的小型坡顶较平坦，会生成细雪
雪林 Grove：寒冷而繁茂的山地，整体形态类似于积雪针叶林
冰封山峰 Frozen Peaks：山势比尖峭山峰更平缓，山峰顶部被斑点状的冰和条带状的浮冰覆盖
尖峭山峰 Jagged Peaks：陡峭的山峰状生物群系，表面被积雪层和雪块覆盖，高度最高可达世界高度限制
裸岩山峰 Stony Peaks：与尖峭山峰的海拔高度及形态一致，但地表未覆雪，而是裸露出石头和条带状的沙砾、安山岩、花岗岩或方解石地层
溶洞 Dripstone Caves：充斥着滴水石块和滴水石锥的荒芜的生物群系，广布着滴水石簇及由滴水石锥组成的钟乳石、石笋或石柱结构
深暗之域 Deep Dark：遍布着由幽匿系列方块构成的斑块的生物群系
繁茂洞穴 Lush Caves：生长着茂盛的洞穴植物的生物群系
绯红森林 Crimson Forest：遍布着巨型下界菌结构的类森林生物群系
诡异森林 Warped Forest：茂密的青色调生物群系，绯红菌、诡异菌和巨型诡异菌散布其中
下界荒地 Nether Wastes：最常见的下界生物群系，由大片的下界岩和熔岩海构成，下界金矿石与下界石英矿石在此密集分布
灵魂沙峡谷 Soul Sand Valley：由灵魂沙、玄武岩和灵魂土组成的生物群系，有着大型的类洞窟地形，地貌广阔且与下界其他生物群系有明显的分界
玄武岩三角洲 Basalt Deltas：充斥着大面积的黑石和玄武岩柱，以及大片的熔岩和岩浆块的生物群系
末地 The End：该生物群系用于生成以末地中坐标0, 0为中心的半径为1024格的圆形区域。末地的中心岛会生成在该圆的中心
末地小型岛屿 Small End Islands：该生物群系作为末地外岛的一部分生成
末地荒地 End Barrens：该生物群系作为末地外岛的一部分生成
末地内陆 End Midlands：该生物群系作为末地外岛的一部分生成
末地高地 End Highlands：该生物群系作为末地外岛的一部分生成
虚空 The Void：上下128高度，皆为虚无
"""

Biomes: list = []

for line in OriginBiomesInfo.strip().split('\n'):
    biome: str = line[: line.find('：')]
    index: int = biome.find(' ')
    biome = biome[: index] + ' | ' + biome[index+1: ]
    Biomes.append(biome)

from pprint import pprint

pprint(Biomes)

Biomes: list = [
    '海洋 | Ocean',
    '平原Plain | 平原Plains',
    '沙漠 | Desert',
    '风袭丘陵 | Windswept Hills',
    '森林 | Forest',
    '针叶林 | Taiga',
    '沼泽 | Swamp',
    '河流 | River',
    '雪原 | Snowy Plains',
    '冻河 | Frozen River',
    '雪山 | Snowy Mountains',
    '蘑菇岛 | Mushroom Fields',
    '蘑菇岛岸Mushroom | Fields Shore',
    '沙滩 | Beach',
    '沙漠丘陵 | Desert Hills',
    '繁茂的丘陵 | Wooded Hills',
    '针叶林丘陵 | Taiga Hills',
    '山地边缘 | Mountain Edge',
    '丛林 | Jungle',
    '丛林丘陵 | Jungle Hills',
    '稀疏丛林Sparse | Jungle',
    '深海 | Deep Ocean',
    '石岸 | Stony Shore',
    '积雪沙滩 | Snowy Beach',
    '桦木森 | 桦木森林',
    '桦木森林丘陵 | Birch Forest Hills',
    '黑森林 | Dark Forest',
    '积雪的针叶林 | Snowy Taiga',
    '积雪的针叶林丘陵 | Snowy Taiga Hills',
    '原始松木针叶林 | Old Growth Pine Taiga',
    '巨型针叶林丘陵 | Giant Tree Taiga Hills',
    '风袭森林 | Windswept Foest',
    '热带草原 | Savanna',
    '热带高原Savanna | Plateau',
    '恶地 | Bandlands',
    '疏林恶地 | Wooded Bandlands',
    '恶地高原 | Badlands Plateau',
    '暖水海洋 | Warm Ocean',
    '暖水深海 | Deep Warm Ocean',
    '温水海洋 | Lukewarm Ocean',
    '温水深海 | Deep Lukewarm Ocean',
    '冷水海洋 | Cold Ocean',
    '冷水深海 | Deep Cold Ocean',
    '冻洋 | Frozen Ocean',
    '冻洋深海 | Deep Frozen Ocean',
    '竹林 | Bamboo Jungle',
    '竹林丘陵 | Bamboo Jungle Hills',
    '向日葵平原 | Sunflower Plains',
    '沙漠湖泊 | Desert Lakes',
    '风袭沙砾丘陵 | Windswept Gravelly Hills',
    '繁华森林 | Flower Forest',
    '针叶林山地 | Taiga Mountains',
    '沼泽丘陵 | Swamp Hills',
    '冰刺之地 | Ice Spikes',
    '丛林变种 | Modified Jungle',
    '丛林边缘变种 | Modified Jungle Edge',
    '原始桦木森林 | Old Growth Brich Forest',
    '高大桦木丘陵 | Tall Brich Hills',
    '黑森林丘陵 | Dark Forest Hills',
    '积雪的针叶林山地 | Snowy Taiga Mountains',
    '原始云杉针叶林 | Old Growth Spruce Taiga',
    '巨型云杉针叶林丘 | Giant Spruce Taiga Hills',
    '沙砾山地 | Gravelly Mountains+',
    '风袭热带草原 | Windswept Savanna',
    '破碎的热带高原 | Shattered Savanna Plateae',
    '风蚀恶地Eroded | Badlands',
    '繁茂的恶地高原变种 | Modified Wooded Badlands Plateau',
    '恶地高原变种 | Modified Badlands Plateau',
    '红树林沼泽 | Mangrove Swamp',
    '草甸 | Meadow',
    '樱花树林 | Cherry Grove',
    '积雪山坡 | Snowy Slopes',
    '雪林 | Grove',
    '冰封山峰 | Frozen Peaks',
    '尖峭山峰 | Jagged Peaks',
    '裸岩山峰 | Stony Peaks',
    '溶洞 | Dripstone Caves',
    '深暗之域 | Deep Dark',
    '繁茂洞穴 | Lush Caves',
    '绯红森林 | Crimson Forest',
    '诡异森林 | Warped Forest',
    '下界荒地 | Nether Wastes',
    '灵魂沙峡谷 | Soul Sand Valley',
    '玄武岩三角洲 | Basalt Deltas',
    '末地 | The End',
    '末地小型岛屿 | Small End Islands',
    '末地荒地 | End Barrens',
    '末地内陆 | End Midlands',
    '末地高地 | End Highlands',
    '虚空 | The Void'
    ]
