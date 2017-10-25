window.onload = function() {

	//scroll down
	$(function() {
		$('a[href*=\\#]').on('click', function(e) {
			e.preventDefault();

			$( 'html, body' ).animate(
				{
					scrollTop: $($(this).attr('href')).offset().top
				},
				{
					duration: 500,
					specialEasing: {
						width: "linear",
						height: "easeOutBounce"
					},
					complete: function() {}
				}
			);
		});
	});

	if(document.getElementById("canvasIndex"))
		var granimInstance = new Granim({
			element: '#canvasIndex',
			direction: 'top-bottom',
			opacity: [0.7, 0.6 , 0.9],
			isPausedWhenNotInView: true,
			states : {
				"default-state": {
					gradients: [
						['#66582c', '#300d00'],	//dark
						['#ad9e6d', '#300d00']	//light
					],
					transitionSpeed: 2000
				}
			}
		});
}