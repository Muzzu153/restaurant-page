const renderPage = () => {
    const wrapper = document.getElementById("wrapper")
    while(wrapper.lastChild.id !=="header"){
        wrapper.removeChild(wrapper.lastChild)
    }
    return wrapper
};

export default renderPage
