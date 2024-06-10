'use strict';

(function () {

    Office.onReady(function () {
     item offi = Office.context.mailbox.item;
        $(document).ready(function () {
        if(Office.context.mailbox.item != null)
        {
            loadItemProps(offi);
        }else 
        {
         $('#item-id').text("undefined");
        $('#item-subject').text("undefined");
        $('#item-internetMessageId').text("undefined");
        }
        
        
        });
    });

    function attachmentFunction()
    {


    }
    
    function loadItemProps(item) {
        // Write message property values to the task pane
        $('#item-id').text(item.itemId);
        $('#item-subject').text(item.subject);
        $('#item-internetMessageId').text(item.internetMessageId);
        $('#item-from').html(item.from.displayName + " &lt;" + item.from.emailAddress + "&gt;");
    }
})();
