   function validate_form() {
            if (document.emp.emp_name.value == "") {
                swal("Please Enter Your Name");
                return false;
            }
            if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(document.emp.email_id.value)) {
                swal("Please Enter valid email address!")
                return (false)
            }
            if (document.emp.num.value == "") {
                swal("Enter Contact Number");
                return false;
            }
            var option = document.getElementsByName('gender');
            if (!(option[0].checked || option[1].checked)) {
                swal("Please Select Your Gender");
                return false;
            }
            var option = document.getElementsByName('cbx');
            if (!(option[0].checked)) {
                swal("Please indicate that you accept the Terms and Conditions");
                return false;
            }
            alert("sucessfully Submitted");
        }

        function isNumberKey(evt) {
            var charCode = (evt.which) ? evt.which : event.keyCode;
            if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
                swal("Enter Number");
                return false;
            }
            return true;
        }
        //-->