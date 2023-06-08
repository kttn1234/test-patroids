var person = document.querySelector("#person"),
  straightPostion = 0,
  straightTransform = 100,
  transformValueX = 970,
  transformValueY = 250,
  transformValueY2 = 570,
  straightPostionX2 = 0,
  transformValueX2 = 1050,
  downPostionX3 = 0,
  count = 0,
  grant = 1,
  downPostionX = 0,
  downPostionY = 0,
  downTransformY = 170,
  downPostionX2 = 0,
  arr = [],
  checkEnd = false;
document.addEventListener(
  "wheel",
  function (event) {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = Math.round((winScroll / height) * 100);
    var widthTrans = Math.round((scrolled * 1580) / 100);

    if (event.wheelDelta < 0) {
      if (widthTrans < 100) {
        widthTrans = 100;
      }

      if (!checkEnd) {
        arr.push(widthTrans);
      }

      // line 1
      if (widthTrans >= getTranslateX() && !checkEnd) {
        straightPostion += 174;
        person.style.backgroundPosition = -straightPostion + "px 0";
        person.style.transform = "translate3d(" + widthTrans + "px, 170px, 0)";
      }

      // move down
      if (getTranslateX() >= transformValueX && !checkEnd) {
        (downPostionX += 174),
          (downTransformY += getSpacePrevNext(
            arr[arr.length - 1],
            arr[arr.length - 2]
          ));

        tranformDownY = getTranslateY();
        person.style.backgroundPosition = -downPostionX + "px -181px";
        person.style.transform =
          "translate3d(" + transformValueX + "px," + downTransformY + "px, 0)";
      }

      //line 2
      if (
        getTranslateX() >= transformValueX &&
        getTranslateY() >= transformValueY &&
        !checkEnd
      ) {
        straightPostionX2 += 174;
        transformValueX += getSpacePrevNext(
          arr[arr.length - 1],
          arr[arr.length - 2]
        );
        person.style.backgroundPosition = -straightPostionX2 + "px 0";
        person.style.transform =
          "translate3d(" + transformValueX + "px, 250px, 0)";
      }
      // down2
      if (
        getTranslateX() >= transformValueX2 &&
        getTranslateY() >= transformValueY &&
        !checkEnd
      ) {
        (downPostionX2 += 174),
          (downTransformY += getSpacePrevNext(
            arr[arr.length - 1],
            arr[arr.length - 2]
          ));
        person.style.backgroundPosition = -downPostionX2 + "px -181px";
        person.style.transform =
          "translate3d(" + transformValueX2 + "px," + downTransformY + "px, 0)";

        if (
          getTranslateX() >= transformValueX2 &&
          getTranslateY() >= transformValueY2
        ) {
          person.style.backgroundPosition = "-507px -362px";
          person.style.transform =
            "translate3d(" + transformValueX2 + "px 615px, 0)";
          checkEnd = true;
        }
      }
    } else {
      // down
      if (getTranslateX() == transformValueX2) {
        (downPostionX2 += 174),
          (downTransformY += -getSpacePrevNext(
            arr[arr.length - 1],
            arr[arr.length - 2]
          ));
        if (getTranslateY() <= transformValueY) {
          (downPostionX3 += 174), (straightPostionX2 += 174);
          transformValueX =
            getTranslateX() -
            getSpacePrevNext(arr[arr.length - 1], arr[arr.length - 2]);

          person.style.backgroundPosition = -downPostionX3 + "px -181px";
          person.style.transform =
            "translate3d(" + transformValueX + "px, 250px, 0)";
        } else {
          person.style.backgroundPosition = -downPostionX2 + "px -181px";
          person.style.transform =
            "translate3d(" +
            transformValueX2 +
            "px," +
            downTransformY +
            "px, 0)";
        }
      }
    }

    count++;
    if (count === 7 * grant) {
      straightPostion = 0;
      downPostionX = 0;
      straightPostionX2 = 0;
      downPostionX2 = 0;
      downPostionX3 = 0;
      grant++;
    }
  },
  { passive: false }
);

function getTranslateX() {
  var style = window.getComputedStyle(person);
  var matrix = new WebKitCSSMatrix(style.transform);
  return matrix.m41;
}

function getTranslateY() {
  var style = window.getComputedStyle(person);
  var matrix = new WebKitCSSMatrix(style.transform);
  return matrix.m42;
}

function getSpacePrevNext(next, prev) {
  return next - prev;
}
window.onload = function () {
  window.scrollTo(0, 0);
};
