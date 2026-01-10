
const topImage = document.createElement('img');
topImage.src = 'dom.jpg';
topImage.alt = 'Top Right Image';
topImage.style.position = 'absolute';
topImage.style.top = '20px';
topImage.style.right = '20px';
topImage.style.width = '400px';


const bottomImage = topImage.cloneNode(true);
bottomImage.alt = 'Bottom Left Image';
bottomImage.style.top = 'auto';
bottomImage.style.right = 'auto';
bottomImage.style.bottom = '20px';
bottomImage.style.left = '20px';

document.body.appendChild(topImage);
document.body.appendChild(bottomImage);


const header = document.getElementById('header');
if (header) {
    header.remove();
}


const navList = document.getElementById('nav');
navList.style.listStyleType = 'circle';
navList.style.padding = '0';
navList.style.margin = '0';
navList.style.paddingLeft = '20px'; 




const listItems = document.querySelectorAll('#nav li');
listItems.forEach(item => {
    item.style.marginBottom = '8px';
});


const centerDiv = document.querySelector('.center');
centerDiv.style.position = 'relative';
centerDiv.style.minHeight = '100vh';
centerDiv.style.display = 'flex';
centerDiv.style.alignItems = 'center';
centerDiv.style.justifyContent = 'center';