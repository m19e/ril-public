(() => {
    const save = () => {
        localStorage.setItem("request_url", document.getElementById("request_url").value);
    };

    const init = () => {
        document.getElementById("request_url").value = localStorage.getItem("request_url");
        document.getElementById("save").addEventListener("click", save);
    };

    init();
})();
