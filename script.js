  document.getElementById('inlineRadio1').disabled = true;
  document.getElementById('inlineRadio2').disabled = true;
  document.getElementById('paperboard').disabled = true;

  var countOnSubmit = function(ev) {
    var material = document.getElementById('material');
    var pageCount = document.getElementById('pageCount');
    var paperboard = document.getElementById('paperboard');
    var spine = ((pageCount.value / 2) * (material.value / 1000));

    if ($("#inlineRadio1").is(":checked")) {
      document.getElementById('tag').innerHTML = +((spine + (paperboard.value * 2)) * 1.1).toFixed(2);
    } else if ($("#inlineRadio2").is(":checked")) {
      document.getElementById('tag').innerHTML = +(spine + (paperboard.value * 2)).toFixed(2);
    } else {
      document.getElementById('tag').innerHTML = +spine.toFixed(2);
    };
    return false;
  };

  var checkBox = document.geElementById('checkBox');

  function checkBoxOnChange() {
    $(document.getElementById('hardcoverPart')).slideToggle('slow');
    $(document.getElementById('inlineRadio1')).prop("checked", false);
    $(document.getElementById('inlineRadio2')).prop("checked", false);
    document.getElementById('inlineRadio1').disabled = false;
    document.getElementById('inlineRadio2').disabled = false;
    document.getElementById('paperboard').disabled = false;
  };

