import { header } from "./header";
const renderPage = () => {
    const wrapper = document.getElementById("wrapper")
    while(wrapper.hasChildNodes()){
        wrapper.removeChild(wrapper.firstChild)
    }
    return wrapper
};

export default renderPage
