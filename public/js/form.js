/* var REGEX_PHONE = /^[0-9 -]+$/,
    REGEX_EMAIL = /^[a-z0-9\.]+@[a-z0-9\.]+\.[a-z]{2,4}$/i;

*/

function validateForm()
  {
    var f=document.forms["myForm"]["name"].value;
    if (f==null || f=="")
    {
      alert("Name must be filled out");
      return false;
    }
   
    var e=document.forms["myForm"]["email"].value;
    var atpos=e.indexOf("@");
    var dotpos=e.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=e.length)
    {
      alert("Not a valid e-mail address");
      return false;
    }

        var f=document.forms["myForm"]["message"].value;
    if (f==null || f=="")
    {
      alert("Message must be filled out");
      return false;
    }
    
    var p=document.forms["myForm"]["phone"].value;
    var phoneno = /^\d{10}$/;  
    if(phoneno.test(p)) 
      {  
        return true;  
      }  
    else  
      {  
        alert("Please enter the valid number");  
        return false;  
      }  

  
}  

/*

<script type="text/javascript">
$(function(){ $("label").inFieldLabels(); });
</script>
<script type="text/javascript">
getTwitters('twitter', {
  id: 'elemisdesign', 
  count: 1, 
  enableLinks: true, 
  ignoreReplies: false,
  template: '<span class="twitterPrefix"><span class="twitterStatus">%text%</span>',
  newwindow: true
});
</script>
<script type="text/javascript">  



</script>
$(document).ready(function() {
  
  $("#ajax-contact-form").submit(function() {
    $('#load').append('<center><img src="ajax-loader.gif" alt="Currently Loading" id="loading" /></center>');

    var fem = $(this).serialize(),
    note = $('#note');
    
    $.ajax({
      type: "POST",
      url: "contact/contact.php",
      data: fem,
      success: function(msg) {
        if ( note.height() ) {      
         note.slideUp(500, function() { $(this).hide(); });
       } 
       else note.hide();

       $('#loading').fadeOut(300, function() {
         $(this).remove();

          // Message Sent? Show the 'Thank You' message and hide the form
          result = (msg === 'OK') ? '<div class="success">Your message has been sent. Thank you!</div>' : msg;

          var i = setInterval(function() {
            if ( !note.is(':visible') ) {
              note.html(result).slideDown(500);
              clearInterval(i);
            }
          }, 40);    
        }); // end loading image fadeOut
     }
   });

    return false;
  });
});
*/