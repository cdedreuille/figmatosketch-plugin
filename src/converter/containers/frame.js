module.exports = function (data, result) {
  result.hasClickThrough = true;
  result.includeInCloudUpload = true;
  result.backgroundColor = {
    "_class": "color",
    "alpha": data.backgroundColor.a,
    "blue": data.backgroundColor.b,
    "green": data.backgroundColor.g,
    "red": data.backgroundColor.r
  };
  result.hasBackgroundColor = true;
}
