function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginright = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginright= "0";
  document.body.style.backgroundColor = "white";
}


$(document).ready( function () {
    navDashboard();
} );




$('#startDate').val(new Date().toJSON().slice(0, 10))
$('#endDate').val(new Date().toJSON().slice(0, 10))


function retriveReport() {
   

    var sDate = $("#startDate").val();
    var eDate = $("#endDate").val();
    var opt = $("#serchType").val();

    if (sDate == "") {
        $('#apperror-sDate').removeClass('hidden');
        return false;

    } else if (eDate == "") {
        $('#apperror-eDate').removeClass('hidden');
        return false;

    } else {
        $('.loadingid').removeClass('hidden');
        var data = {
            STARTDATE: sDate,
            ENDDATE: eDate,
            Option: opt
        };

        var uri = "/PremiumPassport/GetPremiumPaymentByOptions";
        $.ajax({
            type: "GET",
            url: uri,                                                                                  
            data: data,
            contentType: "application/json",
            error: function () {
                $('.loader-wrapper').addClass('hidden');
                $('#containerDiv').css('display', 'none');
                swal("Oops!", "An unexpected error occurred while procesing your request. Please contact support", "error")
                    .then(() => {
                        $('#containerDiv').css('display', 'block');
                    });
            },
            success: function (data) {
                var record = data.result
            


            }


        });
    }
}

//activities nav menue function
function pManager(){
    $("#proMainDiv").removeClass("hidden");
    $("#dashboardDiv").addClass("hidden");
    $("#orderEntryDiv").addClass("hidden");
    $("#bikeMainDiv").addClass("hidden");
    $("#staffDiv").addClass("hidden");
    $("#reportDiv").addClass("hidden");
    $("#usersDiv").addClass("hidden");
    $("#appReqDiv").addClass("hidden");
    if(!$("proMainDiv").is(":hidden")){
        actA.style.color = 'white';
        dashA.style.color = 'black';
        updateA.style.color = 'black';
        carregA.style.color = 'black';
        payA.style.color = 'black';
        repA.style.color = 'black';
        userA.style.color = 'black';
        appR.style.color = 'black';
        
    }
    closeNav();
}

// Dashboard nav menu funtion
function navDashboard(){
    $("#proMainDiv").addClass("hidden");
    $("#dashboardDiv").removeClass("hidden");
    $("#orderEntryDiv").addClass("hidden");
    $("#bikeMainDiv").addClass("hidden");
    $("#staffDiv").addClass("hidden");
    $("#reportDiv").addClass("hidden");
    $("#usersDiv").addClass("hidden");
    $("#appReqDiv").addClass("hidden");
    if(!$("dashboardDiv").is(":hidden")){
        actA.style.color = 'black';
        dashA.style.color = 'white';
        updateA.style.color = 'black';
        carregA.style.color = 'black';
        payA.style.color = 'black';
        repA.style.color = 'black';
        userA.style.color = 'black';
        appR.style.color = 'black';
        
    }
    closeNav();
}

// Update Location nav menu funtion
function oderEntry(){
    $("#proMainDiv").addClass("hidden");
    $("#dashboardDiv").addClass("hidden");
    $("#orderEntryDiv").removeClass("hidden");
    $("#bikeMainDiv").addClass("hidden");
    $("#staffDiv").addClass("hidden");
    $("#reportDiv").addClass("hidden");
    $("#usersDiv").addClass("hidden");
    $("#appReqDiv").addClass("hidden");
    if(!$("orderEntryDiv").is(":hidden")){
        actA.style.color = 'black';
        dashA.style.color = 'black';
        updateA.style.color = 'white';
        carregA.style.color = 'black';
        payA.style.color = 'black';
        repA.style.color = 'black';
        userA.style.color = 'black';
        appR.style.color = 'black';
        
    }
    closeNav();
}

// car registration nav menu funtion
function bManager(){
    $("#proMainDiv").addClass("hidden");
    $("#dashboardDiv").addClass("hidden");
    $("#orderEntryDiv").addClass("hidden");
    $("#bikeMainDiv").removeClass("hidden");
    $("#staffDiv").addClass("hidden");
    $("#reportDiv").addClass("hidden");
    $("#usersDiv").addClass("hidden");
    $("#appReqDiv").addClass("hidden");
    if(!$("bikeMainDiv").is(":hidden")){
        actA.style.color = 'black';
        dashA.style.color = 'black';
        updateA.style.color = 'black';
        carregA.style.color = 'white';
        payA.style.color = 'black';
        repA.style.color = 'black';
        userA.style.color = 'black';
        appR.style.color = 'black';
        
    }
    closeNav();
}

// Payment nav menu funtion
function sData(){
    $("#proMainDiv").addClass("hidden");
    $("#dashboardDiv").addClass("hidden");
    $("#orderEntryDiv").addClass("hidden");
    $("#bikeMainDiv").addClass("hidden");
    $("#staffDiv").removeClass("hidden");
    $("#reportDiv").addClass("hidden");
    $("#usersDiv").addClass("hidden");
    $("#appReqDiv").addClass("hidden");
    if(!$("staffDiv").is(":hidden")){
        actA.style.color = 'black';
        dashA.style.color = 'black';
        updateA.style.color = 'black';
        carregA.style.color = 'black';
        payA.style.color = 'white';
        repA.style.color = 'black';
        userA.style.color = 'black';
        appR.style.color = 'black';
        
    }
    closeNav();
}

// Report nav menu funtion
function navReport(){
    $("#proMainDiv").addClass("hidden");
    $("#dashboardDiv").addClass("hidden");
    $("#orderEntryDiv").addClass("hidden");
    $("#bikeMainDiv").addClass("hidden");
    $("#staffDiv").addClass("hidden");
    $("#reportDiv").removeClass("hidden");
    $("#usersDiv").addClass("hidden");
    $("#appReqDiv").addClass("hidden");
    if(!$("reportDiv").is(":hidden")){
        actA.style.color = 'black';
        dashA.style.color = 'black';
        updateA.style.color = 'black';
        carregA.style.color = 'black';
        payA.style.color = 'black';
        repA.style.color = 'white';
        userA.style.color = 'black';
        appR.style.color = 'black';
        
    }
    closeNav();
}

// Users nav menu funtion
function navUsers(){
    $("#proMainDiv").addClass("hidden");
    $("#dashboardDiv").addClass("hidden");
    $("#orderEntryDiv").addClass("hidden");
    $("#bikeMainDiv").addClass("hidden");
    $("#staffDiv").addClass("hidden");
    $("#reportDiv").addClass("hidden");
    $("#usersDiv").removeClass("hidden");
    $("#appReqDiv").addClass("hidden");
    if(!$("usersDiv").is(":hidden")){
        actA.style.color = 'black';
        dashA.style.color = 'black';
        updateA.style.color = 'black';
        carregA.style.color = 'black';
        payA.style.color = 'black';
        repA.style.color = 'black';
        userA.style.color = 'white';
        appR.style.color = 'black';
        
    }
    closeNav();
}

function aRequest(){
    $("#proMainDiv").addClass("hidden");
    $("#dashboardDiv").addClass("hidden");
    $("#orderEntryDiv").addClass("hidden");
    $("#bikeMainDiv").addClass("hidden");
    $("#staffDiv").addClass("hidden");
    $("#reportDiv").addClass("hidden");
    $("#usersDiv").addClass("hidden");
    $("#appReqDiv").removeClass("hidden");
    if(!$("appReqDiv").is(":hidden")){
        actA.style.color = 'black';
        dashA.style.color = 'black';
        updateA.style.color = 'black';
        carregA.style.color = 'black';
        payA.style.color = 'black';
        repA.style.color = 'black';
        userA.style.color = 'black';
        appR.style.color = 'white';
        
    }
    closeNav();
}


function viewPending(){
    
    $("#Odiv").addClass("hidden");
    $("#Vdiv").removeClass("hidden");
    
    $("#backToOder").removeClass("hidden");
    $("#viewPending").addClass("hidden");
    
    
}

function backToOder(){
    
    $("#Odiv").removeClass("hidden");
    $("#Vdiv").addClass("hidden");
    
    $("#backToOder").addClass("hidden");
    $("#viewPending").removeClass("hidden");

}

function rejectReq(){
    alert("try");
    $("#rejectDivRe").removeClass("hidden");
    }