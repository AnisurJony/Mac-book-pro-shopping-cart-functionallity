

/*                                                                            Assignmeent-5                                                               */

//                                                                             Created by                                                                 //

// -------------------------------------------------------------------------  Anisur Rahman ---------------------------------------------------------------//

/*--------------------------------------------------------------------------------------------------------------------------------------------------------*/





//------------------- 1. Function for Update extra cost --------------//


function costUpdate(changeCost) {

            const ramCost = document.getElementById('memory-price');
            const extraRamCost = parseFloat(ramCost.innerText);
            // const value = document.getElementById('total-cost');
            // console.log(extraCost);
            if (changeCost == true) {
                        ramCost.innerText = 0;

            }
            if (changeCost == false) {
                        ramCost.innerText = 180;
            }




}

//----------------------------- 2. function for SSD Storage---------------------------//



function ssdCostUpdate(updateCost) {
            const ssdCost = document.getElementById('storage-price');

            if (updateCost == true) {
                        ssdCost.innerText = 0;
            }
            if (updateCost == false) {
                        ssdCost.innerText = 100;

            }
            if (updateCost == '1TB') {
                        ssdCost.innerText = 180;

            }




}

//------------------------ 3. delivery Cost fucntion-------------------------------------//


function updateDeliveryCost(delivery) {
            const deliveryCharge = document.getElementById('delivery-charge');

            if (delivery == true) {
                        deliveryCharge.innerText = 0;
            }
            if (delivery == false) {
                        deliveryCharge.innerText = 20;
            }

}



//------------------------------- 4.Function for All Component Cost------------------------//


function componentTotalPrice() {
            //--------------- Call Ram Extra Cost price---------------//

            const extraRamCost = document.getElementById('memory-price');
            const ramValue = parseFloat(extraRamCost.innerText);


            //--------------- Call SSD Extra Cost price---------------//

            const extraSsdCost = document.getElementById('storage-price');
            const ssdValue = parseFloat(extraSsdCost.innerText);

            //--------------- Call Delivery Charge price---------------//

            const deliveryCharge = document.getElementById('delivery-charge');
            const deliveryCostValue = parseFloat(deliveryCharge.innerText);


            //----- Call total Cost price above Cupon Apply button------//

            const value = document.getElementById('total-cost');



            //--------------- Claculate Total Cost---------------//

            const newCostValue = deliveryCostValue + ramValue + ssdValue + 1299;
            value.innerText = newCostValue;

            //----- Call total Cost price Under Cupon Apply button------//
            const totalCost = document.getElementById('discount-cost');
            totalCost.innerText = newCostValue;


            // ------ Warrning Massage Only for Cupon Button -------------//
            document.getElementById('warning-massg').style.display = "none";

}




//----------------------- function for cupon add and Warning massg for cupone iteration--------------------------------//


function discountWithCupon() {
            const totalAfterDiscount = document.getElementById('discount-cost');
            const totalDiscountValue = parseFloat(totalAfterDiscount.innerText);

            const cupon = document.getElementById('promo-code');
            const cuponCode = cupon.value;
            const discountParcent = 20;

            if (cuponCode == 'stevekaku' && Number.isInteger(totalDiscountValue) == true) {

                        totalAfterDiscount.innerText = totalDiscountValue - (totalDiscountValue * discountParcent / 100);

            }
            else if (Number.isInteger(totalDiscountValue) == false) {

                        document.getElementById('warning-massg').style.display = "block";
            }

            cupon.value = '';
}




//---------------------------- Even handaler for extra memory-------------------------------------//

//1. button for 8GB ram

document.getElementById('extra-ram-btn-one').addEventListener('click', function () {

            costUpdate(true,);
            componentTotalPrice();

});

// 2.------------------------- button for 16GB ran------------------------------------------------//

document.getElementById('extra-ram-btn-two').addEventListener('click', function () {
            const newUpdate = costUpdate(false);
            componentTotalPrice();

});




// --------------------------------Even Handaler for extra Storage --------------------------------//

// 1. button for 256GB ssd one

document.getElementById('extra-ssd-btn-one').addEventListener('click', function () {
            ssdCostUpdate(true);
            componentTotalPrice();
})

// 2.----------------------------  button for 512GB ssd one------------------------------------------//

document.getElementById('extra-ssd-btn-two').addEventListener('click', function () {
            ssdCostUpdate(false);
            componentTotalPrice();

})

// 3. ------------------------------- button for 1TB ssd one----------------------------------------//

document.getElementById('extra-ssd-btn-three').addEventListener('click', function () {
            ssdCostUpdate('1TB');
            componentTotalPrice();

})




//--------------------------------- Event Handaler for Delivery Charge------------------------------//


document.getElementById('no-delivery-cost').addEventListener('click', function () {
            updateDeliveryCost(true);
            componentTotalPrice();
})
document.getElementById('delivery-cost').addEventListener('click', function () {
            updateDeliveryCost(false);
            componentTotalPrice();
})



//---------------------------------- Event Handaler for Cupon Apply Button----------------------------------//


document.getElementById('apply-cupon').addEventListener('click', function () {
            discountWithCupon();

})