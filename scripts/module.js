Hooks.once("init", async function () {
  console.log("Pokemon5e Addons | Initializing");

  CONFIG.DND5E.damageTypes["bug"] = "P5E.DamageBug";
  CONFIG.DND5E.damageTypes["dark"] = "P5E.DamageDark";
  CONFIG.DND5E.damageTypes["dragon"] = "P5E.DamageDragon";
  CONFIG.DND5E.damageTypes["electric"] = "P5E.DamageElectric";
  CONFIG.DND5E.damageTypes["fairy"] = "P5E.DamageFairy";
  CONFIG.DND5E.damageTypes["fighting"] = "P5E.DamageFighting";
  CONFIG.DND5E.damageTypes["flying"] = "P5E.DamageFlying";
  CONFIG.DND5E.damageTypes["ghost"] = "P5E.DamageGhost";
  CONFIG.DND5E.damageTypes["grass"] = "P5E.DamageGrass";
  CONFIG.DND5E.damageTypes["ground"] = "P5E.DamageGround";
  CONFIG.DND5E.damageTypes["ice"] = "P5E.DamageIce";
  CONFIG.DND5E.damageTypes["normal"] = "P5E.DamageNormal";
  CONFIG.DND5E.damageTypes["rock"] = "P5E.DamageRock";
  CONFIG.DND5E.damageTypes["steel"] = "P5E.DamageSteel";
  CONFIG.DND5E.damageTypes["water"] = "P5E.DamageWater";

  CONFIG.DND5E.CHARACTER_EXP_LEVELS = [
    0,
    200,
    800,
    2000,
    6000,
    12000,
    20000,
    30000,
    44000,
    62000,
    82000,
    104000,
    128000,
    158000,
    194000,
    234000,
    278000,
    326000,
    382000,
    450000,
  ];
});

Hooks.once("ready", async function () {});
