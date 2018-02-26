(function () {
    new Fingerprint2().get(function(result, components) {
        checkFingerprint(result);
        setHashValueUI(result);
        setHashValueLS(result);
        console.log(result, components);
    });

    function setHashValueUI(value) {
        document.getElementById('fingerprint').innerText = value;
    }

    function setHashValueLS(value) {
        window.localStorage.setItem('_fingerprint', value)
    }

    function checkFingerprint(value) {
        const fpLS = window.localStorage.getItem('_fingerprint');
        if (!fpLS) {
            return;
        }
        const message = fpLS === value ?
            '<span class="success">ID matches!</span>' :
            '<span class="failed">ID does not match.</span><p>New ID:</p><p>' + value + '</p><p>Old ID:</p><p>' + fpLS + '</p>';
        document.getElementById('result').innerHTML = message;
    }
})();