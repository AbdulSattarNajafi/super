/**
 * Header Section Navigation (Between Subcomponents)
 */
$('.subcmp_nav button').click(function(e) {
    e.stopPropagation();
    const subcmp_target = $(this).attr('subcmp_target');
    const subcmp_parentcmp = $(this).attr('subcmp_parentcmp');
    if(typeof subcmp_target !== typeof undefined && subcmp_target !== false 
        && typeof subcmp_parentcmp !== typeof undefined && subcmp_parentcmp !== false){
        load_sub_component(subcmp_parentcmp, subcmp_target);
    }
    $('.subcmp_nav .btn').removeClass('btn-secondary');
    $('.subcmp_nav .btn').addClass('btn-light');
    $(this).addClass('btn-secondary'); 
    $(this).removeClass('btn-light'); 
});