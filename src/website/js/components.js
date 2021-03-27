// Header
const headerlocation = document.getElementsByTagName("header")[0];
const headercomponent = `
<h1>Openbook</h1>`;
headerlocation.innerHTML = headercomponent;
// Footer
const footerlocation = document.getElementsByTagName("footer")[0];
const footercomponent = `
<small>
    Openbook is MIT-Licensed and its source code can be found on 
    <a rel="noopener noreferrer nofollow" href="https://github.com/Socerest2/openbook">
        GitHub
    </a>
</small>`;
footerlocation.innerHTML = footercomponent;