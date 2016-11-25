let imageUploadButton = document.getElementById('imageUpload');
imageUploadButton.onclick = (e) => {
	document.getElementById('leadPhoto').click();
};

const loadAnim = () => {
	document.body.classList.remove('loading');
};

window.onload = (e) => {
	window.setTimeout(loadAnim, 1000);
};