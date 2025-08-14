from pprint import pprint

Biomes: list = [
    '海洋 | Ocean',
    '平原 | Plains',
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
    '蘑菇岛岸 | Mushroom Fields Shore',
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
    '热带高原 | Savanna Plateau',
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
    '风蚀恶地 | Eroded Badlands',
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

Biomes: dict = {Biome.split(' | ')[1]: Biome.split(' | ')[0] for Biome in Biomes}

Biomes: list = []

with open(file=r"tests\HighlightedBiomeCandidates.js", mode='r', encoding='utf-8') as JSFile:
    for Line in JSFile:
        Start = Line.find('name: "'); Start = Start + 7 if Start != -1 else 0
        End = Line.rfind('"'); End = End if End != -1 else 0
        Key: str = Line[Start: End] if Start and End else ''
        if Key:
            Prefix = Line[: Start]
            Suffix = Line[End:]
            Biomes.append(Key)
Biomes: dict = {Biome.split(' | ')[0]: Biome.split(' | ')[1] for Biome in Biomes}

print(len(Biomes))