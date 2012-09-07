
$(document).ready(function(){
    
    $('#contact-button').click(function(e){
        
        e.preventDefault();  
        $.post("php/contact.php", $("#contact-form").serialize(),function(result){  
            
            //and after the ajax request ends we check the text returned  
            if(result){ 
                completeInviteForm()
                //if the mail is sent remove the submit paragraph 
                $('#cf_submit_p').remove(); 
                //and show the mail success div with fadeIn 
                $('#mail_success').fadeIn(500); 
            }else{ 
                //show the mail failed div 
                $('#mail_fail').fadeIn(500); 
                //reenable the submit button by removing attribute disabled and change the text back to Send The Message 
                $('#send_message').removeAttr('disabled').attr('value', 'Send The Message');  
            }  
        }); 
       
    })
})


function completeInviteForm() {
		$("#contact-form").fadeOut(400, function(){
			$(this).before('<h2 class="contact-message">All set! We will be in touch.</h2>');
		});
}
