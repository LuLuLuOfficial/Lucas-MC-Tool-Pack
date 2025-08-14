!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
          ? self
          : {},
      n = new e.Error().stack;
    n &&
      ((e._posthogChunkIds = e._posthogChunkIds || {}),
      (e._posthogChunkIds[n] = "019876c4-ea37-7700-a2e6-dea1b527b354"));
  } catch (e) {}
})();
import "./CBomguU0MRsX.js";
var c = ((e) => ((e.Java = "Java"), (e.Bedrock = "Bedrock"), e))(c || {}),
  h = ((e) => (
    (e[(e.V1_7 = 10070)] = "V1_7"),
    (e[(e.V1_8 = 10080)] = "V1_8"),
    (e[(e.V1_9 = 10090)] = "V1_9"),
    (e[(e.V1_10 = 10100)] = "V1_10"),
    (e[(e.V1_11 = 10110)] = "V1_11"),
    (e[(e.V1_12 = 10120)] = "V1_12"),
    (e[(e.V1_13 = 10130)] = "V1_13"),
    (e[(e.V1_14 = 10140)] = "V1_14"),
    (e[(e.V1_15 = 10150)] = "V1_15"),
    (e[(e.V1_16 = 10160)] = "V1_16"),
    (e[(e.V1_17 = 10170)] = "V1_17"),
    (e[(e.V1_18 = 10180)] = "V1_18"),
    (e[(e.V1_19 = 10190)] = "V1_19"),
    (e[(e.V1_19_3 = 10193)] = "V1_19_3"),
    (e[(e.V1_20 = 10200)] = "V1_20"),
    (e[(e.V1_21 = 10210)] = "V1_21"),
    (e[(e.V1_21_2 = 10212)] = "V1_21_2"),
    (e[(e.V1_21_4 = 10214)] = "V1_21_4"),
    (e[(e.V1_21_5 = 10215)] = "V1_21_5"),
    (e[(e.V1_21_6 = 10216)] = "V1_21_6"),
    (e[(e.V1_22 = 10220)] = "V1_22"),
    e
  ))(h || {}),
  y = ((e) => (
    (e[(e.V1_14 = 10140)] = "V1_14"),
    (e[(e.V1_16 = 10160)] = "V1_16"),
    (e[(e.V1_17 = 10170)] = "V1_17"),
    (e[(e.V1_18 = 10180)] = "V1_18"),
    (e[(e.V1_19 = 10190)] = "V1_19"),
    (e[(e.V1_20 = 10200)] = "V1_20"),
    (e[(e.V_1_20_60 = 10206)] = "V_1_20_60"),
    (e[(e.V1_21 = 10210)] = "V1_21"),
    (e[(e.V1_21_40 = 10214)] = "V1_21_40"),
    (e[(e.V1_21_50 = 10215)] = "V1_21_50"),
    (e[(e.V1_21_60 = 10216)] = "V1_21_60"),
    (e[(e.V1_21_70 = 10217)] = "V1_21_70"),
    (e[(e.V1_21_80 = 10218)] = "V1_21_80"),
    (e[(e.V1_21_90 = 10219)] = "V1_21_90"),
    (e[(e.V1_22 = 10220)] = "V1_22"),
    e
  ))(y || {}),
  r = ((e) => (
    (e.Overworld = "overworld"), (e.Nether = "nether"), (e.End = "end"), e
  ))(r || {}),
  f = ((e) => (
    (e[(e.ZOMBIE = 0)] = "ZOMBIE"),
    (e[(e.SPIDER = 1)] = "SPIDER"),
    (e[(e.SKELETON = 2)] = "SKELETON"),
    e
  ))(f || {}),
  t = ((e) => (
    (e.BastionRemnant = "bastionRemnant"),
    (e.BuriedTreasure = "buriedTreasure"),
    (e.Dungeon = "dungeon"),
    (e.EndCity = "endCity"),
    (e.NetherFortress = "netherFortress"),
    (e.SlimeChunk = "slimeChunk"),
    (e.Stronghold = "stronghold"),
    (e.Village = "village"),
    (e.Mineshaft = "mineshaft"),
    (e.WoodlandMansion = "woodlandMansion"),
    (e.PillagerOutpost = "pillagerOutpost"),
    (e.OceanRuin = "oceanRuin"),
    (e.OceanMonument = "oceanMonument"),
    (e.Shipwreck = "shipwreck"),
    (e.DesertTemple = "desertTemple"),
    (e.JungleTemple = "jungleTemple"),
    (e.WitchHut = "witchHut"),
    (e.Igloo = "igloo"),
    (e.RuinedPortalOverworld = "ruinedPortalOverworld"),
    (e.RuinedPortalNether = "ruinedPortalNether"),
    (e.Spawn = "spawn"),
    (e.Fossil = "fossil"),
    (e.FossilNether = "fossilNether"),
    (e.Ravine = "ravine"),
    (e.EndGateway = "endGateway"),
    (e.AmethystGeode = "amethystGeode"),
    (e.AncientCity = "ancientCity"),
    (e.ItemOverworld = "itemOverworld"),
    (e.OreVein = "oreVein"),
    (e.Cave = "cave"),
    (e.DesertWell = "desertWell"),
    (e.TrailRuin = "trailRuin"),
    (e.TrialChamber = "trialChamber"),
    (e.LavaPool = "lavaPool"),
    e
  ))(t || {});
const d = window.SeedMapTiles;
function s(e) {
  return (
    (e = Math.round(e * 10) / 10),
    (e + "").replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
  );
}
function g(e) {
  return e[2].map(function (n) {
    return [e[0], e[1], n];
  });
}
function v(e) {
  const n = e[2];
  return n ? g([e[0], e[1], n]) : [[e[0], e[1], void 0]];
}
function T(e, n) {
  return n.edition === c.Java && n.javaVersion >= h.V1_18
    ? [e[0] * 16, null, e[1] * 16]
    : [e[0] * 16 + 8, null, e[1] * 16 + 8];
}
const o = {
    chunkClassifier: d.calcTileParams(8).size,
    veryBig: d.calcTileParams(4).size,
    big: d.calcTileParams(2).size,
    normal: d.calcTileParams(0.5).size,
    small: d.calcTileParams(0.25).size,
  },
  i = {
    chunk: function (e) {
      return e[0] + "//" + e[1];
    },
    xzBlock: function (e, n) {
      return e + "/" + n;
    },
    xyBlockArr: function (e) {
      return i.xzBlock(e[2][0], e[2][2]);
    },
  };
function S(e) {
  return e.count < 600
    ? "small"
    : e.count < 1800
    ? "medium"
    : e.count < 5400
    ? "large"
    : "huge";
}
function p(e) {
  return !!(e && e[0] != null && e[2] != null);
}
function _(e) {
  return e
    ? e === "units"
      ? "Housing units"
      : e === "hoglin_stable"
      ? "Hoglin stables"
      : e === "treasure"
      ? "Treasure room"
      : e === "bridge"
      ? "Bridges"
      : null
    : null;
}
function x(e) {
  return e === f.ZOMBIE
    ? "Zombie"
    : e === f.SKELETON
    ? "Skeleton"
    : e === f.SPIDER
    ? "Spider"
    : null;
}
function C(e) {
  return [
    e.isLarge ? "Large," : "Small,",
    e.type === "warm" ? "Warm" : "Cold",
    "Ruin",
    e.clusterSize > 0 && "with Cluster (" + e.clusterSize + " small ruins)",
  ]
    .filter(Boolean)
    .join(" ");
}
function z(e) {
  return e.oreCount < 6 ? "small" : e.oreCount < 9 ? "medium" : "large";
}
function w(e) {
  if (e.type == null) return null;
  let n = {
    desert: "Desert Village",
    plains: "Plains Village",
    savanna: "Savanna Village",
    taiga: "Taiga Village",
    snowy: "Snowy Village",
  }[e.type];
  return e.zombie && (n = "Zombie " + n), n;
}
const a = (e) => e,
  u = (e) => e,
  m = {
    [t.AmethystGeode]: a({
      shortId: "Ag",
      imgSrc: "amethyst.png",
      dimension: r.Overworld,
      maxTileSize: o.chunkClassifier,
      splitPois: g,
      getHoverText: function (e) {
        return (
          "Likely Geode @ " +
          e[2]
            .map(function (l) {
              return s(l[0]) + " / " + s(l[1]) + " / " + s(l[2]);
            })
            .join(", ")
        );
      },
      getTooltipText: function () {
        return "Likely Amethyst Geode";
      },
      getCoords: function (e) {
        return e[2];
      },
      fillColor: "98,69,149",
      getHash: i.xyBlockArr,
    }),
    [t.AncientCity]: u({
      shortId: "Ac",
      imgSrc: "ancient-city.png",
      dimension: r.Overworld,
      maxTileSize: o.normal,
      getTooltipText: function () {
        return "Ancient City";
      },
      getCoords: function (e) {
        return [e[0] * 16 + 8, -51, e[1] * 16 + 8];
      },
      getHoverText: function (e, n) {
        const l = m[t.AncientCity].getCoords?.(e, n) ?? [0, 0, 0];
        return "Ancient City @ " + s(l[0]) + " / " + l[1] + " / " + s(l[2]);
      },
      fillColor: "11,47,44",
      getHash: i.chunk,
    }),
    [t.BastionRemnant]: u({
      shortId: "Br",
      imgSrc: {
        bridge: "bastion-bridge.png",
        stables: "bastion-stables.png",
        units: "bastion-units.png",
        treasure: "bastion-treasure.png",
      },
      dimension: r.Nether,
      maxTileSize: o.big,
      getCoords: function (e) {
        return [e[0] * 16, null, e[1] * 16];
      },
      getHoverText: function (e) {
        const n = _(e[2].type);
        return n == null ? null : "Type: " + n;
      },
      getTooltipText: function (e) {
        return "Bastion (" + _(e[2].type) + ")";
      },
      getImg: function (e) {
        return e.type === "hoglin_stable"
          ? "stables"
          : e.type === "treasure"
          ? "treasure"
          : e.type === "bridge"
          ? "bridge"
          : "units";
      },
      fillColor: function (e) {
        return e.type == null || e.type === "units"
          ? "107,107,107"
          : e.type === "hoglin_stable"
          ? "245,0,122"
          : e.type === "treasure"
          ? "139,69,19"
          : e.type === "bridge"
          ? "8,145,17"
          : "0,0,0";
      },
      getHash: i.chunk,
    }),
    [t.BuriedTreasure]: u({
      shortId: "Bt",
      imgSrc: "buried-treasure.png",
      dimension: r.Overworld,
      maxTileSize: o.big,
      getHoverText: function (e, n) {
        const l = m[t.BuriedTreasure].getCoords?.(e, n) ?? [0, 0, 0];
        return "Treasure @ " + s(l[0]) + " / " + s(l[2]);
      },
      getTooltipText: function () {
        return "Buried Treasure";
      },
      getCoords: function (e, n) {
        const l = n.edition === c.Java ? 9 : 8;
        return [e[0] * 16 + l, null, e[1] * 16 + l];
      },
      fillColor: "166,117,78",
      getHash: i.chunk,
    }),
    [t.Cave]: a({
      shortId: "Ca",
      imgSrc: {
        normal: "cave.png",
        special: "cave-special.png",
      },
      dimension: r.Overworld,
      maxTileSize: o.veryBig,
      splitPois: g,
      getCoords: function (e) {
        return e[2].reference.pos;
      },
      getTooltipText: function (e) {
        return "Cheese Cave (" + S(e[2]) + ")";
      },
      getImg: function (e) {
        return S(e) === "huge" ? "special" : "normal";
      },
      fillColor: function () {
        return "68,68,68";
      },
      getHash: function (e) {
        return i.xzBlock(e[2].reference.pos[0], e[2].reference.pos[2]);
      },
    }),
    [t.DesertTemple]: u({
      shortId: "Dt",
      imgSrc: "desert-temple.png",
      dimension: r.Overworld,
      maxTileSize: o.normal,
      getTooltipText: function (e, n) {
        return n.edition === c.Java && n.javaVersion >= h.V1_18
          ? "Likely Desert Temple"
          : "Desert Temple";
      },
      fillColor: "143,121,0",
      getHash: i.chunk,
    }),
    [t.DesertWell]: u({
      shortId: "Dw",
      imgSrc: "desert-well.png",
      dimension: r.Overworld,
      maxTileSize: o.big,
      getTooltipText: function (e) {
        return "Likely Desert Well";
      },
      getCoords: function (e) {
        return e[2].slice(0, 3);
      },
      fillColor: "40,57,161",
      getHash: i.chunk,
    }),
    [t.Dungeon]: a({
      shortId: "D",
      imgSrc: {
        default: "dungeon.png",
        zombie: "dungeon-zombie.png",
        spider: "dungeon-spider.png",
        skeleton: "dungeon-skeleton.png",
      },
      dimension: r.Overworld,
      maxTileSize: o.chunkClassifier,
      getImg: function (e) {
        const n = e[3];
        return n === f.ZOMBIE
          ? "zombie"
          : n === f.SKELETON
          ? "skeleton"
          : "spider";
      },
      fillColor: function (e) {
        return e.length > 1
          ? "200,100,0"
          : e[0][3] === f.ZOMBIE
          ? "70,109,29"
          : e[0][3] === f.SKELETON
          ? "125,125,125"
          : e[0][3] === f.SPIDER
          ? "168,46,0"
          : "0,0,0";
      },
      splitPois: g,
      getCoords: function (e) {
        return e[2].slice(0, 3);
      },
      getTooltipText: function (e, n) {
        const l = x(e[2][3]) || "Unknown Mob";
        return (
          ((n.edition === c.Bedrock && n.bedrockVersion >= y.V1_18) ||
          (n.edition === c.Java && n.javaVersion >= h.V1_18)
            ? "Possible"
            : "Likely") +
          " Dungeon (" +
          l +
          ")"
        );
      },
      getHoverText: function (e) {
        return e[2]
          .map(function (n) {
            return (
              (x(n[3]) || "Dungeon") +
              " @ " +
              [s(n[0]), n[1], s(n[2])].join(" / ")
            );
          }, "")
          .join(", ");
      },
      getHash: function (e) {
        return i.xyBlockArr([e[0], e[1], [e[2][0], e[2][1], e[2][2]]]);
      },
    }),
    [t.Fossil]: a({
      shortId: "F",
      imgSrc: "fossil.png",
      dimension: r.Overworld,
      maxTileSize: o.chunkClassifier,
      fillColor: "90,90,90",
      splitPois: v,
      getCoords: function (e) {
        return p(e[2])
          ? e[2].slice(0, 3)
          : [e[0] * 16 + 8, null, e[1] * 16 + 8];
      },
      getTooltipText: function (e) {
        let n = e[2] && e[2][3] === "diamond" ? "Diamond Fossil" : "Fossil";
        return p(e[2]) || (n += " (Estimated)"), n;
      },
      getHoverText: function (e) {
        const n = e[2].filter(Boolean);
        return p(n[0])
          ? n
              .map(function (l) {
                return (
                  "Fossil @ " +
                  [s(l?.[0] ?? 0), l?.[1], s(l?.[2] ?? 0)]
                    .filter(Boolean)
                    .join(" / ")
                );
              }, "")
              .join(", ")
          : null;
      },
      getHash: i.chunk,
    }),
    [t.FossilNether]: a({
      shortId: "Fn",
      imgSrc: {
        default: "fossil.png",
        ghast: "fossil-ghast.png",
      },
      dimension: r.Nether,
      maxTileSize: o.chunkClassifier,
      fillColor: function (e) {
        return e[0][3].hasDriedGhast ? "0,122,108" : "90,90,90";
      },
      splitPois: g,
      getImg: function (e) {
        return e[3].hasDriedGhast ? "ghast" : "default";
      },
      getCoords: function (e) {
        return e[2].slice(0, 3);
      },
      getTooltipText: function (e, n) {
        let l;
        return (
          n.edition === c.Bedrock
            ? (l = "Likely Nether Fossil")
            : (l = "Nether Fossil"),
          e[2][3].hasDriedGhast && (l += " (Ghast)"),
          l
        );
      },
      getHoverText: function (e) {
        return e[2]
          .map(function (n) {
            return (
              "Fossil " +
              (n[3].hasDriedGhast ? "(Ghast)" : "") +
              " @ " +
              [s(n[0]), n[1], s(n[2])].filter(Boolean).join(" / ")
            );
          }, "")
          .join(", ");
      },
      getHash: i.chunk,
    }),
    [t.EndCity]: u({
      shortId: "E",
      imgSrc: {
        default: "end-city.png",
        ship: "end-city-ship.png",
      },
      dimension: r.End,
      maxTileSize: o.normal,
      getImg: function (e) {
        return e.hasShip == null || e.hasShip ? "ship" : "default";
      },
      fillColor: function (e) {
        return e.hasShip == null || e.hasShip ? "73,49,73" : "130,130,130";
      },
      getTooltipText: function (e) {
        return (
          "Likely " +
          (e[2].hasShip == null
            ? "End City"
            : e[2].hasShip
            ? "End City (with ship)"
            : "End City (without ship)")
        );
      },
      getHoverText: function (e) {
        return e[2].hasShip == null
          ? null
          : e[2].hasShip
          ? "End City with ship"
          : "End City without ship";
      },
      getHash: i.chunk,
    }),
    [t.EndGateway]: a({
      shortId: "Eg",
      imgSrc: "end-gateway.png",
      dimension: r.End,
      maxTileSize: o.normal,
      fillColor: "6,57,49",
      splitPois: g,
      getCoords: function (e) {
        return [e[2].x, null, e[2].z];
      },
      getHoverText: function (e) {
        return "End Gateway @ " + s(e[2][0].x) + " / " + s(e[2][0].z);
      },
      getTooltipText: function () {
        return "End Gateway";
      },
      getHash: function (e) {
        return i.xzBlock(e[2].x, e[2].z);
      },
    }),
    [t.NetherFortress]: u({
      shortId: "N",
      imgSrc: "nether-fortress.png",
      dimension: r.Nether,
      maxTileSize: o.big,
      fillColor: "195,65,55",
      getCoords: function (e) {
        return [e[0] * 16 + 11, null, e[1] * 16 + 11];
      },
      getTooltipText: function () {
        return "Nether Fortress (Crossing)";
      },
      getHoverText: function (e) {
        return (
          "Crossing @ " + s((e[0] << 4) + 11) + " / " + s((e[1] << 4) + 11)
        );
      },
      getHash: i.chunk,
    }),
    [t.Igloo]: u({
      shortId: "I",
      imgSrc: {
        default: "igloo.png",
        basement: "igloo-basement.png",
      },
      dimension: r.Overworld,
      maxTileSize: o.normal,
      getImg: function (e) {
        return e.hasBasement ? "basement" : "default";
      },
      fillColor: function (e) {
        return e.hasBasement ? "35,87,205" : "86,86,86";
      },
      getTooltipText: function (e) {
        return e[2].hasBasement == null
          ? "Igloo"
          : e[2].hasBasement
          ? "Igloo (with basement)"
          : "Igloo (without basement)";
      },
      getHoverText: function (e) {
        return e[2].hasBasement == null
          ? null
          : e[2].hasBasement
          ? "Igloo with basement"
          : "Igloo without basement";
      },
      getHash: i.chunk,
    }),
    [t.JungleTemple]: u({
      shortId: "J",
      imgSrc: "jungle-temple.png",
      dimension: r.Overworld,
      maxTileSize: o.normal,
      getTooltipText: function (e, n) {
        return n.edition === c.Java && n.javaVersion >= h.V1_18
          ? "Likely Jungle Temple"
          : "Jungle Temple";
      },
      fillColor: "114,133,10",
      getHash: i.chunk,
    }),
    [t.WoodlandMansion]: u({
      shortId: "Ma",
      imgSrc: "mansion.png",
      dimension: r.Overworld,
      maxTileSize: o.small,
      getTooltipText: function (e, n) {
        return n.edition === c.Java && n.javaVersion >= h.V1_18
          ? "Likely Woodland Mansion"
          : "Woodland Mansion";
      },
      fillColor: "160,82,45",
      getHash: i.chunk,
    }),
    [t.LavaPool]: a({
      shortId: "Lp",
      imgSrc: {
        bucket: "lava-bucket.png",
        cave: "lava-cave.png",
      },
      getImg: function (e) {
        return e.type === "undergroundLake" ? "bucket" : "cave";
      },
      dimension: r.Overworld,
      maxTileSize: o.chunkClassifier,
      splitPois: g,
      fillColor: "211,83,14",
      getHash: function (e) {
        return i.xzBlock(e[2].pos[0], e[2].pos[2]);
      },
      getTooltipText: function (e) {
        return e[2].type === "cave"
          ? "Lava-Flooded Cave"
          : "Likely Underground Lava Lake";
      },
      getTooltipAdditionalText: function () {
        return "Never dig straight down";
      },
      getCoords: function (e) {
        return e[2].pos;
      },
    }),
    [t.Mineshaft]: u({
      shortId: "M",
      imgSrc: "mineshaft.png",
      dimension: r.Overworld,
      maxTileSize: o.veryBig,
      getTooltipText: function () {
        return "Mineshaft";
      },
      fillColor: "148,116,0",
      getHash: i.chunk,
    }),
    [t.OceanMonument]: u({
      shortId: "Om",
      imgSrc: "ocean-monument.png",
      dimension: r.Overworld,
      maxTileSize: o.normal,
      getTooltipText: function () {
        return "Ocean Monument";
      },
      fillColor: "100,100,220",
      getHash: i.chunk,
    }),
    [t.OceanRuin]: u({
      shortId: "Or",
      imgSrc: {
        default: "ocean-ruin.png",
        special: "ocean-ruin-special.png",
      },
      dimension: r.Overworld,
      maxTileSize: o.big,
      getImg: function (e) {
        return e.isLarge && e.clusterSize > 0 ? "special" : "default";
      },
      fillColor: function (e) {
        return e.type === "cold"
          ? e.isLarge && e.clusterSize > 0
            ? "51,102,255"
            : "80,98,149"
          : e.isLarge && e.clusterSize > 0
          ? "255,82,51"
          : "149,91,80";
      },
      getTooltipText: function (e) {
        return C(e[2]);
      },
      getHoverText: function (e) {
        return C(e[2]);
      },
      getHash: i.chunk,
    }),
    [t.PillagerOutpost]: u({
      shortId: "Po",
      imgSrc: "pillager-outpost.png",
      dimension: r.Overworld,
      getCoords: T,
      maxTileSize: o.normal,
      getTooltipText: function () {
        return "Pillager Outpost";
      },
      fillColor: "96,63,28",
      getHash: i.chunk,
    }),
    [t.Ravine]: a({
      shortId: "Rv",
      imgSrc: {
        normal: "ravine.png",
        special: "ravine-special.png",
        underwater: "ravine-underwater.png",
        underwaterSpecial: "ravine-underwater-special.png",
      },
      dimension: r.Overworld,
      maxTileSize: o.chunkClassifier,
      splitPois: g,
      getCoords: function (e) {
        return [e[2].x, e[2].y, e[2].z];
      },
      getImg: function (e) {
        return e.isUnderwater
          ? e.isMegaRavine
            ? "underwaterSpecial"
            : "underwater"
          : e.isMegaRavine
          ? "special"
          : "normal";
      },
      getTooltipText: function (e) {
        const n = e[2];
        return [
          n.isMegaRavine && "Mega",
          n.isUnderwater && "Underwater",
          "Ravine",
          n.thickness && "(Width: " + s(n.thickness) + ")",
        ]
          .filter(Boolean)
          .join(" ");
      },
      getHoverText: function (e) {
        const n = e[2][0];
        return [
          n.isMegaRavine && "Mega",
          n.isUnderwater && "Underwater",
          "Ravine",
          "@ " + s(n.x) + " / " + s(n.y) + " / " + s(n.z),
        ]
          .filter(Boolean)
          .join(" ");
      },
      fillColor: function (e) {
        const n = e[0];
        return n.isUnderwater
          ? n.isMegaRavine
            ? "168,7,213"
            : "0,0,255"
          : n.isMegaRavine
          ? "128,25,0"
          : "20,90,0";
      },
      getHash: function (e) {
        return i.xzBlock(e[2].x, e[2].z);
      },
    }),
    [t.OreVein]: a({
      shortId: "Ov",
      imgSrc: {
        copper: "raw-copper.png",
        iron: "raw-iron.png",
      },
      dimension: r.Overworld,
      splitPois: g,
      getCoords: function (e) {
        return e[2].reference;
      },
      getImg: function (e) {
        return e.type;
      },
      maxTileSize: o.chunkClassifier,
      getTooltipText: function (e) {
        return [
          e[2].type === "copper" ? "Copper Vein" : "Iron Vein",
          "(" + z(e[2]) + ")",
        ].join(" ");
      },
      fillColor: "96,63,28",
      getHash: function (e) {
        return i.xzBlock(e[2].reference[0], e[2].reference[2]);
      },
    }),
    [t.RuinedPortalOverworld]: u({
      shortId: "Rp",
      imgSrc: "ruined-portal.png",
      dimension: r.Overworld,
      maxTileSize: o.big,
      getTooltipText: function () {
        return "Estimated Ruined Portal";
      },
      fillColor: "109,9,109",
      getHash: i.chunk,
    }),
    [t.RuinedPortalNether]: u({
      shortId: "Rpn",
      imgSrc: "ruined-portal.png",
      dimension: r.Nether,
      maxTileSize: o.big,
      getTooltipText: function () {
        return "Estimated Ruined Portal";
      },
      fillColor: "109,9,109",
      getHash: i.chunk,
    }),
    [t.Shipwreck]: u({
      shortId: "Sw",
      imgSrc: "shipwreck.png",
      dimension: r.Overworld,
      maxTileSize: o.big,
      getTooltipText: function () {
        return "Shipwreck";
      },
      fillColor: "108,88,97",
      getHash: i.chunk,
    }),
    [t.SlimeChunk]: u({
      shortId: "Sc",
      dimension: r.Overworld,
      maxTileSize: o.chunkClassifier,
      getTooltipText: function () {
        return "Slime Chunk";
      },
      fillColor: "29,145,44",
      fillColorOuter: "40,199,60",
      getHash: i.chunk,
    }),
    [t.Spawn]: u({
      shortId: "Sp",
      imgSrc: "spawn.png",
      dimension: r.Overworld,
      maxTileSize: o.small,
      getCoords: function (e) {
        return [e[2].x, null, e[2].z];
      },
      getTooltipText: function () {
        return "Estimated Spawn Point";
      },
      fillColor: "50,50,50",
      getHash: i.chunk,
    }),
    [t.Stronghold]: u({
      shortId: "St",
      imgSrc: "stronghold.png",
      dimension: r.Overworld,
      maxTileSize: o.small,
      fillColor: "195,65,55",
      getCoords: function (e) {
        return [e[0] * 16 + 4, null, e[1] * 16 + 4];
      },
      getTooltipText: function () {
        return "Stronghold (Stairway)";
      },
      getHoverText: function (e) {
        return (
          "Stronghold stairway @ " +
          s((e[0] << 4) + 4) +
          " / " +
          s((e[1] << 4) + 4)
        );
      },
      getHash: i.chunk,
    }),
    [t.TrailRuin]: u({
      shortId: "Tr",
      imgSrc: "trail-ruin.png",
      dimension: r.Overworld,
      maxTileSize: o.normal,
      getTooltipText: function (e) {
        return "Trail Ruins";
      },
      getCoords: function (e) {
        return e[2].slice(0, 3);
      },
      fillColor: "123,80,20",
      getHash: i.chunk,
    }),
    [t.TrialChamber]: u({
      shortId: "Tc",
      imgSrc: "trial-chamber.png",
      dimension: r.Overworld,
      maxTileSize: o.big,
      getTooltipText: function () {
        return "Trial Chamber";
      },
      getCoords: function (e) {
        return e[2] != null ? e[2] : [e[0] * 16, null, e[1] * 16];
      },
      fillColor: "113,45,25",
      getHash: i.chunk,
    }),
    [t.Village]: u({
      shortId: "V",
      imgSrc: {
        default: "village.png",
        zombie: "village-zombie.png",
      },
      dimension: r.Overworld,
      maxTileSize: o.normal,
      getImg: function (e) {
        return e.zombie ? "zombie" : "default";
      },
      getCoords: T,
      fillColor: function (e) {
        return e.zombie
          ? "200,0,190"
          : e.type == null
          ? "100,131,63"
          : {
              desert: "180,101,4",
              plains: "100,131,63",
              savanna: "138,128,56",
              taiga: "11,102,89",
              snowy: "120,120,120",
            }[e.type];
      },
      getTooltipText: function (e) {
        return w(e[2]) || "Village";
      },
      getHoverText: function (e) {
        return w(e[2]);
      },
      getHash: i.chunk,
    }),
    [t.WitchHut]: u({
      shortId: "Wh",
      imgSrc: "witch-hut.png",
      dimension: r.Overworld,
      maxTileSize: o.normal,
      getTooltipText: function () {
        return "Witch Hut";
      },
      fillColor: "169,44,212",
      getHash: i.chunk,
    }),
    [t.ItemOverworld]: u({
      shortId: "IOw",
      imgSrc: "golden-apple.png",
      dimension: r.Overworld,
      maxTileSize: o.small,
      fillColor: "145,81,13",
      getTooltipText: function () {
        return "Likely Enchanted Apple (temple chest)";
      },
      getHoverText: function () {
        return "Likely Enchanted Apple (temple chest)";
      },
      getHash: i.chunk,
    }),
  },
  E = Object.fromEntries(Object.entries(m).map((e) => [e[1].shortId, e[0]]));
export { y as B, m as C, r as D, c as E, h as J, t as P, E as a };
//# sourceMappingURL=Dmj_xUyu2hdq.js.map

//# chunkId=019876c4-ea37-7700-a2e6-dea1b527b354
