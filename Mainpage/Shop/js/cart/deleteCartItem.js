function deleteItem() {

    const itemId = $(this).siblings('.hiddenId').val();
    // console.log("Item ID:", itemId);

    $.ajax({
        url: "php/deleteCartItem.php",
        type: "POST",
        data: { itemId: itemId },
        success: function (response) {
            console.log("happened")
            $('#cartItemsContainer').find('.cardCart').filter(function () {
                return $(this).find('.hiddenId').val() === itemId;
            }).fadeOut(400, function () {
                $(this).remove();
            });
            let quantity = $('#quantity' + itemId).text().replace('x ', '');
            updateCartNumber(itemId, quantity);
            $('#cartFooter').html("Total Sum: <strong>" + 0 + "$</strong>");
            $('#cartFooterFooter').html("");
            
            $('.error'+itemId).html('');
         
        },
        error: function (xhr, status, error) {
            console.log("Delete request failed " + response);
            // Handle any errors that occurred during the request
        }
    });
    getTotalSum();
}
