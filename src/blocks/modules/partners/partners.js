$(document).ready(function () {
  if ($("#map-partnership").length > 0) {
    $(".partners-tabs a").click(function (e) {
      e.preventDefault();
      var tab_id = $(this).attr("data-tab");

      $(".partners-tabs a").removeClass("current-partners");
      $(".partners-tab_content").removeClass("current-partners");

      $(this).addClass("current-partners");
      $("#" + tab_id).addClass("current-partners");
    });

    $(".map-info_mobile li").click(function (e) {
      e.preventDefault();
      var tab_id = $(this).attr("data-tab");

      $(".map-info_mobile li").removeClass("current-mapinfo");
      $(".mapinfo-tab_content").removeClass("current-mapinfo");

      $(this).addClass("current-mapinfo");
      $("#" + tab_id).addClass("current-mapinfo");
    });

    $(".title-mobile").click(function () {
      $(this).next().toggleClass("mapinfo-list_show");
    });

    $(".map-list li").click(function () {
      if ($(".map-list li.current-map_item").length > 0) {
        $(".map-list li").removeClass("current-map_item");
      }
      $(this).addClass("current-map_item");
      checkFilterImp();
      checkFilterOffice();
      checkFilterWarehouse();
      checkFilterServices();
    });
    function checkFilterImp() {
      if (window.matchMedia("(min-width: 992px)").matches) {
        if ($(".map-list li.implantation-triol").hasClass("current-map_item")) {
          $(".prod-filter").fadeIn(100);
        } else {
          $(".filter-list li").removeClass("current-prod");
          $(".dot-map").removeClass([
            "ak06-show",
            "tm01-show",
            "at24-show",
            "at27-show",
            "ep01-show"
          ]);
          $(".prod-filter").fadeOut(100);
        }
      }
    }
    checkFilterImp();

    function checkFilterOffice() {
      if ($(".offices-triol").hasClass("current-map_item")) {
        $(".office-info").addClass("show-offices");
      } else {
        $(".office-info").removeClass("show-offices");
      }
    }
    checkFilterOffice();

    function checkFilterWarehouse() {
      if ($(".warehouse-triol").hasClass("current-map_item")) {
        $(".warehouse-info").addClass("show-warehouse");
      } else {
        $(".warehouse-info").removeClass("show-warehouse");
      }
    }
    checkFilterWarehouse();

    function checkFilterServices() {
      if ($(".services-triol").hasClass("current-map_item")) {
        $(".services-info").addClass("show-services");
      } else {
        $(".services-info").removeClass("show-services");
      }
    }
    checkFilterServices();

    $(".filter-list li").click(function () {
      $(this).toggleClass("current-prod");
      if ($(".filter-list li.current-prod").length > 1) {
        $(".filter-list li").removeClass("current-prod");
        $(this).toggleClass("current-prod");
      }

      checkDots();
    });

    function checkDots() {
      if ($(".ak06-filter").hasClass("current-prod")) {
        $(".ak06-item_map").addClass("ak06-show");
      } else {
        $(".ak06-item_map").removeClass("ak06-show");
      }

      if ($(".tm01-filter").hasClass("current-prod")) {
        $(".tm01-item_map").addClass("tm01-show");
      } else {
        $(".tm01-item_map").removeClass("tm01-show");
      }

      if ($(".at24-filter").hasClass("current-prod")) {
        $(".at24-item_map").addClass("at24-show");
      } else {
        $(".at24-item_map").removeClass("at24-show");
      }

      if ($(".at27-filter").hasClass("current-prod")) {
        $(".at27-item_map").addClass("at27-show");
      } else {
        $(".at27-item_map").removeClass("at27-show");
      }

      if ($(".ep01-filter").hasClass("current-prod")) {
        $(".ep01-item_map").addClass("ep01-show");
      } else {
        $(".ep01-item_map").removeClass("ep01-show");
      }
    }
    checkDots();

    function usaProd() {
      var usLeftPos = $(".usa-elem").find("path").offset().left;
      var usTopPos = $(".usa-elem").find("path").offset().top;
      var usWidth = $(".usa-elem").find("path").get(0).getBBox().width;
      var usHeight = $(".usa-elem").find("path").get(0).getBBox().height;

      $(".usa-info_wrapp").offset({
        left: usLeftPos,
        top: usTopPos,
      });
      $(".usa-info_wrapp").css({
        width: usWidth,
        height: usHeight,
      });
    }
    usaProd();

    function usaOffice() {
      var usLeftPos = $(".usa-elem").find("path").offset().left;
      var usTopPos = $(".usa-elem").find("path").offset().top;
      var usWidth = $(".usa-elem").find("path").get(0).getBBox().width;
      var usHeight = $(".usa-elem").find("path").get(0).getBBox().height;
      
      usLeftPos = usLeftPos + 75;
      usTopPos = usTopPos + 50;

      $(".usa-office_info").offset({
        left: usLeftPos,
        top: usTopPos,
      });
      $(".usa-office_info").css({
        width: usWidth,
        height: usHeight,
      });
    }

    usaOffice();

    function france() {
      var frLeftPos = $(".fr-elem").find("path").offset().left;
      var frTopPos = $(".fr-elem").find("path").offset().top;
      var frWidth = $(".fr-elem").find("path").get(0).getBBox().width;
      var frHeight = $(".fr-elem").find("path").get(0).getBBox().height;

      $(".fr-info_wrapp").offset({
        left: frLeftPos,
        top: frTopPos,
      });
      $(".fr-info_wrapp").css({
        width: frWidth,
        "min-height": frHeight,
      });
    }

    france();

    function romania() {
      var roLeftPos = $(".ro-elem").find("path").offset().left;
      var roTopPos = $(".ro-elem").find("path").offset().top;
      var roWidth = $(".ro-elem").find("path").get(0).getBBox().width;
      var roHeight = $(".ro-elem").find("path").get(0).getBBox().height;

      $(".ro-info_wrapp").offset({
        left: roLeftPos,
        top: roTopPos,
      });
      $(".ro-info_wrapp").css({
        width: roWidth,
        "min-height": roHeight,
      });
    }
    romania();

    function ukraineProd() {
      var uaLeftPos = $(".ua-elem").find("path").offset().left;
      var uaTopPos = $(".ua-elem").find("path").offset().top;
      var uaWidth = $(".ua-elem").find("path").get(0).getBBox().width;
      var uaHeight = $(".ua-elem").find("path").get(0).getBBox().height;

      $(".ua-info_wrapp").offset({
        left: uaLeftPos,
        top: uaTopPos,
      });
      $(".ua-info_wrapp").css({
        width: uaWidth,
        "min-height": uaHeight,
      });
    }
    ukraineProd();

    function russProd() {
      var ruLeftPos = $(".ru-elem").find("path").offset().left;
      var ruTopPos = $(".ru-elem").find("path").offset().top;
      var ruWidth = $(".ru-elem").find("path").get(0).getBBox().width;
      var ruHeight = $(".ru-elem").find("path").get(0).getBBox().height;

      $(".ru-info_wrapp").offset({
        left: ruLeftPos,
        top: ruTopPos,
      });
      $(".ru-info_wrapp").css({
        width: ruWidth,
        "min-height": ruHeight,
      });
    }
    russProd();

    function ukraineOffice() {
      var uaLeftPos = $(".ua-elem").find("path").offset().left;
      var uaTopPos = $(".ua-elem").find("path").offset().top;
      var uaWidth = $(".ua-elem").find("path").get(0).getBBox().width;
      var uaHeight = $(".ua-elem").find("path").get(0).getBBox().height;

      uaTopPos = uaTopPos - 110;
      $(".ua-office_info").offset({
        left: uaLeftPos,
        top: uaTopPos,
      });
      $(".ua-office_info").css({
        width: uaWidth,
        "min-height": uaHeight,
      });
    }
    ukraineOffice();

    function ukraineServices() {
      var uaLeftPos = $(".ua-elem").find("path").offset().left;
      var uaTopPos = $(".ua-elem").find("path").offset().top;
      var uaWidth = $(".ua-elem").find("path").get(0).getBBox().width;
      var uaHeight = $(".ua-elem").find("path").get(0).getBBox().height;

      uaTopPos = uaTopPos - 50;

      $(".ua-services_info").offset({
        left: uaLeftPos,
        top: uaTopPos,
      });
      $(".ua-services_info").css({
        width: uaWidth,
        "min-height": uaHeight,
      });
    }
    ukraineServices();

    function latAm() {
      var latLeftPos = $(".lat-elem").find("path").offset().left;
      var latTopPos = $(".lat-elem").find("path").offset().top;
      var latWidth = $(".lat-elem").find("path").get(0).getBBox().width;
      var latHeight = $(".lat-elem").find("path").get(0).getBBox().height;

      $(".lat-info_wrapp").offset({
        left: latLeftPos,
        top: latTopPos,
      });
      $(".lat-info_wrapp").css({
        width: latWidth,
        "min-height": latHeight,
      });
    }
    latAm();

    function indiaProduct() {
      var inLeftPos = $(".in-elem").find("path").offset().left;
      var inTopPos = $(".in-elem").find("path").offset().top;
      var inWidth = $(".in-elem").find("path").get(0).getBBox().width;
      var inHeight = $(".in-elem").find("path").get(0).getBBox().height;

      $(".in-info_wrapp").offset({
        left: inLeftPos,
        top: inTopPos,
      });
      $(".in-info_wrapp").css({
        width: inWidth,
        "min-height": inHeight,
      });
    }
    indiaProduct();

    function indiaService() {
      var inLeftPos = $(".in-elem").find("path").offset().left;
      var inTopPos = $(".in-elem").find("path").offset().top;
      var inWidth = $(".in-elem").find("path").get(0).getBBox().width;
      var inHeight = $(".in-elem").find("path").get(0).getBBox().height;

      inTopPos = inTopPos - 30;

      $(".in-services_info").offset({
        left: inLeftPos,
        top: inTopPos,
      });
      $(".in-services_info").css({
        width: inWidth,
        "min-height": inHeight,
      });
    }
    indiaService();

    function indonesiaProd() {
      var idLeftPos = $(".id-elem").find("path").offset().left;
      var idTopPos = $(".id-elem").find("path").offset().top;
      var idWidth = $(".id-elem").find("path").get(0).getBBox().width;
      var idHeight = $(".id-elem").find("path").get(0).getBBox().height;

      $(".id-info_wrapp").offset({
        left: idLeftPos,
        top: idTopPos,
      });
      $(".id-info_wrapp").css({
        width: idWidth,
        "min-height": idHeight,
      });
    }
    indonesiaProd();

    function indonesiaService() {
      var idLeftPos = $(".id-elem").find("path").offset().left;
      var idTopPos = $(".id-elem").find("path").offset().top;
      var idWidth = $(".id-elem").find("path").get(0).getBBox().width;
      var idHeight = $(".id-elem").find("path").get(0).getBBox().height;

      idTopPos = idTopPos - idHeight;
      $(".id-services_info").offset({
        left: idLeftPos,
        top: idTopPos,
      });
      $(".id-services_info").css({
        width: idWidth,
        "min-height": idHeight,
      });
    }
    indonesiaService();

    function iraq() {
      var irqLeftPos = $(".irq-elem").find("path").offset().left;
      var irqTopPos = $(".irq-elem").find("path").offset().top;
      var irqWidth = $(".irq-elem").find("path").get(0).getBBox().width;
      var irqHeight = $(".irq-elem").find("path").get(0).getBBox().height;

      $(".irq-info_wrapp").offset({
        left: irqLeftPos,
        top: irqTopPos,
      });
      $(".irq-info_wrapp").css({
        width: irqWidth,
        "min-height": irqHeight,
      });
    }
    iraq();

    function iranProd() {
      var irnLeftPos = $(".irn-elem").find("path").offset().left;
      var irnTopPos = $(".irn-elem").find("path").offset().top;
      var irnWidth = $(".irn-elem").find("path").get(0).getBBox().width;
      var irnHeight = $(".irn-elem").find("path").get(0).getBBox().height;

      $(".irn-info_wrapp").offset({
        left: irnLeftPos,
        top: irnTopPos,
      });
      $(".irn-info_wrapp").css({
        width: irnWidth,
        "min-height": irnHeight,
      });
    }
    iranProd();

    function iranServices() {
      var irnLeftPos = $(".irn-elem").find("path").offset().left;
      var irnTopPos = $(".irn-elem").find("path").offset().top;
      var irnWidth = $(".irn-elem").find("path").get(0).getBBox().width;
      var irnHeight = $(".irn-elem").find("path").get(0).getBBox().height;

      irnTopPos = irnTopPos - irnHeight;

      $(".irn-services_info").offset({
        left: irnLeftPos,
        top: irnTopPos,
      });
      $(".irn-services_info").css({
        width: irnWidth,
        "min-height": irnHeight,
      });
    }
    iranServices();

    function nigeria() {
      var ngLeftPos = $(".ng-elem").find("path").offset().left;
      var ngTopPos = $(".ng-elem").find("path").offset().top;
      var ngWidth = $(".ng-elem").find("path").get(0).getBBox().width;
      var ngHeight = $(".ng-elem").find("path").get(0).getBBox().height;

      $(".ng-info_wrapp").offset({
        left: ngLeftPos,
        top: ngTopPos,
      });
      $(".ng-info_wrapp").css({
        width: ngWidth,
        "min-height": ngHeight,
      });
    }
    nigeria();

    function thailand() {
      var thaiLeftPos = $(".thai-elem").find("path").offset().left;
      var thaiTopPos = $(".thai-elem").find("path").offset().top;
      var thaiWidth = $(".thai-elem").find("path").get(0).getBBox().width;
      var thaiHeight = $(".thai-elem").find("path").get(0).getBBox().height;

      $(".thai-info_wrapp").offset({
        left: thaiLeftPos,
        top: thaiTopPos,
      });
      $(".thai-info_wrapp").css({
        width: thaiWidth,
        "min-height": thaiHeight,
      });
    }
    thailand();

    function oman() {
      var omLeftPos = $(".om-elem").find("path").offset().left;
      var omTopPos = $(".om-elem").find("path").offset().top;
      var omWidth = $(".om-elem").find("path").get(0).getBBox().width;
      var omHeight = $(".om-elem").find("path").get(0).getBBox().height;

      $(".om-info_wrapp").offset({
        left: omLeftPos,
        top: omTopPos,
      });
      $(".om-info_wrapp").css({
        width: omWidth,
        "min-height": omHeight,
      });
    }
    oman();

    function kuwait() {
      var kuwLeftPos = $(".kuw-elem").find("path").offset().left;
      var kuwTopPos = $(".kuw-elem").find("path").offset().top;
      var kuwWidth = $(".kuw-elem").find("path").get(0).getBBox().width;
      var kuwHeight = $(".kuw-elem").find("path").get(0).getBBox().height;

      $(".kuw-info_wrapp").offset({
        left: kuwLeftPos,
        top: kuwTopPos,
      });
      $(".kuw-info_wrapp").css({
        width: kuwWidth,
        "min-height": kuwHeight,
      });
    }
    kuwait();

    function georgia() {
      var geLeftPos = $(".ge-elem").find("path").offset().left;
      var geTopPos = $(".ge-elem").find("path").offset().top;
      var geWidth = $(".ge-elem").find("path").get(0).getBBox().width;
      var geHeight = $(".ge-elem").find("path").get(0).getBBox().height;

      $(".ge-info_wrapp").offset({
        left: geLeftPos,
        top: geTopPos,
      });
      $(".ge-info_wrapp").css({
        width: geWidth,
        "min-height": geHeight,
      });
    }
    georgia();

    function turkey() {
      var trLeftPos = $(".tr-elem").find("path").offset().left;
      var trTopPos = $(".tr-elem").find("path").offset().top;
      var trWidth = $(".tr-elem").find("path").get(0).getBBox().width;
      var trHeight = $(".tr-elem").find("path").get(0).getBBox().height;

      $(".tr-info_wrapp").offset({
        left: trLeftPos,
        top: trTopPos,
      });
      $(".tr-info_wrapp").css({
        width: trWidth,
        "min-height": trHeight,
      });
    }
    turkey();

    function egypt() {
      var egLeftPos = $(".eg-elem").find("path").offset().left;
      var egTopPos = $(".eg-elem").find("path").offset().top;
      var egWidth = $(".eg-elem").find("path").get(0).getBBox().width;
      var egHeight = $(".eg-elem").find("path").get(0).getBBox().height;

      $(".eg-info_wrapp").offset({
        left: egLeftPos,
        top: egTopPos,
      });
      $(".eg-info_wrapp").css({
        width: egWidth,
        "min-height": egHeight,
      });
    }
    egypt();

    function argentina() {
      var agLeftPos = $(".ag-elem").find("path").offset().left;
      var agTopPos = $(".ag-elem").find("path").offset().top;
      var agWidth = $(".ag-elem").find("path").get(0).getBBox().width;
      var agHeight = $(".ag-elem").find("path").get(0).getBBox().height;

      agTopPos = agTopPos - 30;

      $(".ag-info_wrapp").offset({
        left: agLeftPos,
        top: agTopPos,
      });
      $(".ag-info_wrapp").css({
        width: agWidth,
        "min-height": agHeight,
      });
    }
    argentina();

    function columbia() {
      var coLeftPos = $(".co-elem").find("path").offset().left;
      var coTopPos = $(".co-elem").find("path").offset().top;
      var coWidth = $(".co-elem").find("path").get(0).getBBox().width;
      var coHeight = $(".co-elem").find("path").get(0).getBBox().height;

      $(".co-info_wrapp").offset({
        left: coLeftPos,
        top: coTopPos,
      });
      $(".co-info_wrapp").css({
        width: coWidth,
        "min-height": coHeight,
      });
    }
    columbia();

    function peru() {
      var perLeftPos = $(".per-elem").find("path").offset().left;
      var perTopPos = $(".per-elem").find("path").offset().top;
      var perWidth = $(".per-elem").find("path").get(0).getBBox().width;
      var perHeight = $(".per-elem").find("path").get(0).getBBox().height;

      $(".per-info_wrapp").offset({
        left: perLeftPos,
        top: perTopPos,
      });
      $(".per-info_wrapp").css({
        width: perWidth,
        "min-height": perHeight,
      });
    }
    peru();

    function uzbekistanProd() {
      var uzLeftPos = $(".uz-elem").find("path").offset().left;
      var uzTopPos = $(".uz-elem").find("path").offset().top;
      var uzWidth = $(".uz-elem").find("path").get(0).getBBox().width;
      var uzHeight = $(".uz-elem").find("path").get(0).getBBox().height;

      $(".uz-info_wrapp").offset({
        left: uzLeftPos,
        top: uzTopPos,
      });
      $(".uz-info_wrapp").css({
        width: uzWidth,
        "min-height": uzHeight,
      });
    }
    uzbekistanProd();

    function uzbekistanOffice() {
      var uzLeftPos = $(".uz-elem").find("path").offset().left;
      var uzTopPos = $(".uz-elem").find("path").offset().top;
      var uzWidth = $(".uz-elem").find("path").get(0).getBBox().width;
      var uzHeight = $(".uz-elem").find("path").get(0).getBBox().height;

      uzTopPos = uzTopPos - 45;

      $(".uz-office_info").offset({
        left: uzLeftPos,
        top: uzTopPos,
      });
      $(".uz-office_info").css({
        width: uzWidth,
        "min-height": uzHeight,
      });
    }
    uzbekistanOffice();

    function kazahstanProd() {
      var kzLeftPos = $(".kz-elem").find("path").offset().left;
      var kzTopPos = $(".kz-elem").find("path").offset().top;
      var kzWidth = $(".kz-elem").find("path").get(0).getBBox().width;
      var kzHeight = $(".kz-elem").find("path").get(0).getBBox().height;

      $(".kz-info_wrapp").offset({
        left: kzLeftPos,
        top: kzTopPos,
      });
      $(".kz-info_wrapp").css({
        width: kzWidth,
        "min-height": kzHeight,
      });
    }
    kazahstanProd();

    function kazahstanServices() {
      var kzLeftPos = $(".kz-elem").find("path").offset().left;
      var kzTopPos = $(".kz-elem").find("path").offset().top;
      var kzWidth = $(".kz-elem").find("path").get(0).getBBox().width;
      var kzHeight = $(".kz-elem").find("path").get(0).getBBox().height;

      kzTopPos = kzTopPos - 25;

      $(".kz-services_info").offset({
        left: kzLeftPos,
        top: kzTopPos,
      });
      $(".kz-services_info").css({
        width: kzWidth,
        "min-height": kzHeight,
      });
    }
    kazahstanServices();

    function chinaServices() {
      var cnLeftPos = $(".cn-elem").find("path").offset().left;
      var cnTopPos = $(".cn-elem").find("path").offset().top;
      var cnWidth = $(".cn-elem").find("path").get(0).getBBox().width;
      var cnHeight = $(".cn-elem").find("path").get(0).getBBox().height;

      cnTopPos = cnTopPos - 15;

      $(".cn-services_info").offset({
        left: cnLeftPos,
        top: cnTopPos,
      });
      $(".cn-services_info").css({
        width: cnWidth,
        "min-height": cnHeight,
      });
    }
    chinaServices();

    function chinaProd() {
      var cnLeftPos = $(".cn-elem").find("path").offset().left;
      var cnTopPos = $(".cn-elem").find("path").offset().top;
      var cnWidth = $(".cn-elem").find("path").get(0).getBBox().width;
      var cnHeight = $(".cn-elem").find("path").get(0).getBBox().height;

      $(".cn-info_wrapp").offset({
        left: cnLeftPos,
        top: cnTopPos,
      });
      $(".cn-info_wrapp").css({
        width: cnWidth,
        "min-height": cnHeight,
      });
    }
    chinaProd();

    function uae() {
      var uaeLeftPos = $(".uae-elem").find("path").offset().left;
      var uaeTopPos = $(".uae-elem").find("path").offset().top;
      var uaeWidth = $(".uae-elem").find("path").get(0).getBBox().width;
      var uaeHeight = $(".uae-elem").find("path").get(0).getBBox().height;

      uaeTopPos = uaeTopPos - 70;

      $(".uae-office_info").offset({
        left: uaeLeftPos,
        top: uaeTopPos,
      });
      $(".uae-office_info").css({
        width: uaeWidth,
        "min-height": uaeHeight,
      });
    }
    uae();

    function uaeProd() {
      var uaeLeftPos = $(".uae-elem").find("path").offset().left;
      var uaeTopPos = $(".uae-elem").find("path").offset().top;
      var uaeWidth = $(".uae-elem").find("path").get(0).getBBox().width;
      var uaeHeight = $(".uae-elem").find("path").get(0).getBBox().height;

      uaeTopPos = uaeTopPos - 70;

      $(".uae-info_wrapp").offset({
        left: uaeLeftPos,
        top: uaeTopPos,
      });
      $(".uae-info_wrapp").css({
        width: uaeWidth,
        "min-height": uaeHeight,
      });
    }
    uaeProd();

    function venezProd() {
      var venezLeftPos = $(".venez-elem").find("path").offset().left;
      var venezTopPos = $(".venez-elem").find("path").offset().top;
      var venezWidth = $(".venez-elem").find("path").get(0).getBBox().width;
      var venezHeight = $(".venez-elem").find("path").get(0).getBBox().height;

      venezLeftPos = venezLeftPos + 10;

      $(".venez-info_wrapp").offset({
        left: venezLeftPos,
        top: venezTopPos,
      });
      $(".venez-info_wrapp").css({
        width: venezWidth,
        "min-height": venezHeight,
      });
    }
    venezProd();

    function cypProd() {
      var LeftPos = $(".cyp-elem").find("path").offset().left;
      var TopPos = $(".cyp-elem").find("path").offset().top;
      var Width = $(".cyp-elem").find("path").get(0).getBBox().width;
      var Height = $(".cyp-elem").find("path").get(0).getBBox().height;

      TopPos = TopPos - 10;

      $(".cyp-info_wrapp").offset({
        left: LeftPos,
        top: TopPos,
      });
      $(".cyp-info_wrapp").css({
        width: Width,
        "min-height": Height,
      });
    }
    cypProd();

    function turkeyProd() {
      var LeftPos = $(".tr-elem").find("path").offset().left;
      var TopPos = $(".tr-elem").find("path").offset().top;
      var Width = $(".tr-elem").find("path").get(0).getBBox().width;
      var Height = $(".tr-elem").find("path").get(0).getBBox().height;

      $(".tr-info_wrapp").offset({
        left: LeftPos,
        top: TopPos,
      });
      $(".tr-info_wrapp").css({
        width: Width,
        "min-height": Height,
      });
    }
    turkeyProd();

    function saudProd() {
      var LeftPos = $(".saud-elem").find("path").offset().left;
      var TopPos = $(".saud-elem").find("path").offset().top;
      var Width = $(".saud-elem").find("path").get(0).getBBox().width;
      var Height = $(".saud-elem").find("path").get(0).getBBox().height;

      $(".saud-info_wrapp").offset({
        left: LeftPos,
        top: TopPos,
      });
      $(".saud-info_wrapp").css({
        width: Width,
        "min-height": Height,
      });
    }
    saudProd();

    function belProd() {
      var LeftPos = $(".bel-elem").find("path").offset().left;
      var TopPos = $(".bel-elem").find("path").offset().top;
      var Width = $(".bel-elem").find("path").get(0).getBBox().width;
      var Height = $(".bel-elem").find("path").get(0).getBBox().height;

      $(".bel-info_wrapp").offset({
        left: LeftPos,
        top: TopPos,
      });
      $(".bel-info_wrapp").css({
        width: Width,
        "min-height": Height,
      });
    }
    belProd();

    function molProd() {
      var LeftPos = $(".mol-elem").find("path").offset().left;
      var TopPos = $(".mol-elem").find("path").offset().top;
      var Width = $(".mol-elem").find("path").get(0).getBBox().width;
      var Height = $(".mol-elem").find("path").get(0).getBBox().height;

      $(".mol-info_wrapp").offset({
        left: LeftPos,
        top: TopPos,
      });
      $(".mol-info_wrapp").css({
        width: Width,
        "min-height": Height,
      });
    }
    molProd();

    function vietnamProd() {
      var LeftPos = $(".viet-elem").find("path").offset().left;
      var TopPos = $(".viet-elem").find("path").offset().top;
      var Width = $(".viet-elem").find("path").get(0).getBBox().width;
      var Height = $(".viet-elem").find("path").get(0).getBBox().height;

      $(".viet-info_wrapp").offset({
        left: LeftPos,
        top: TopPos,
      });
      $(".viet-info_wrapp").css({
        width: Width,
        "min-height": Height,
      });
    }
    vietnamProd();

    function germanProd() {
      var LeftPos = $(".de-elem").find("path").offset().left;
      var TopPos = $(".de-elem").find("path").offset().top;
      var Width = $(".de-elem").find("path").get(0).getBBox().width;
      var Height = $(".de-elem").find("path").get(0).getBBox().height;

      $(".de-info_wrapp").offset({
        left: LeftPos,
        top: TopPos,
      });
      $(".de-info_wrapp").css({
        width: Width,
        "min-height": Height,
      });
    }
    germanProd();

    function azerProd() {
      var LeftPos = $(".az-elem").find("path").offset().left;
      var TopPos = $(".az-elem").find("path").offset().top;
      var Width = $(".az-elem").find("path").get(0).getBBox().width;
      var Height = $(".az-elem").find("path").get(0).getBBox().height;

      $(".az-info_wrapp").offset({
        left: LeftPos,
        top: TopPos,
      });
      $(".az-info_wrapp").css({
        width: Width,
        "min-height": Height,
      });
    }
    azerProd();
  }

  if ($(".partnership #map-partnership").length > 0) {
    var block_show_second = false;

    function scrollTrackingSecond() {
      if (block_show_second) {
        return false;
      }

      var wt = $(window).scrollTop();
      var wh = $(window).height();
      var et = $(".innovation-list").offset().top;
      var eh = $(".innovation-list").outerHeight();
      var dh = $(document).height();

      if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
        block_show_second = true;

        $(".count").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 2000,
                easing: "swing",
                step: function (now) {
                  $(this).text(Math.ceil(now));
                },
              }
            );
        });
      }
    }

    $(window).scroll(function () {
      scrollTrackingSecond();
    });

    $(document).ready(function () {
      scrollTrackingSecond();
    });
  }
});