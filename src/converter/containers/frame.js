module.exports = function (data, result) {
  result.hasClickThrough = true;
  result.includeInCloudUpload = true;
  result.backgroundColor = {
    "_class": "color",
    "alpha": data.backgrounds[0].color.a,
    "blue": data.backgrounds[0].color.b,
    "green": data.backgrounds[0].color.g,
    "red": data.backgrounds[0].color.r
  };
  result.hasBackgroundColor = true;
}
