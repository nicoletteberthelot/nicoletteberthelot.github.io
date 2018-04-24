
$(".row").click(showWrapper)

function showWrapper(event) {
$(event.currentTarget).children(".wrapper").slideToggle(300);
}
