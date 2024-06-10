'use strict';

(function () {

    Office.onReady(function () {

        $(document).ready(function () {
        if(Office.context.mailbox.item != null)
        {
            loadItemProps(Office.context.mailbox.item;);
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
