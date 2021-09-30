function collatz() {
    if (document.getElementById('number').value.length == 0) {
        alert("Please enter a valid number");
        return;
    }
    let n = parseInt(document.getElementById('number').value, 10);
    let y = [], x = [];
    let i = 1;
    while(n != 1) {
        y.push(n);
        x.push(i);
        i++;
        if ((n & 1) != 0) {
            n = 3*n + 1;
        } else {
            n = parseInt(n/2, 10);
        }
    }
    y.push(n);
    x.push(i);
    i++;

    layout = {
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        xaxis: {
            visible: false,
            showgrid: false
        },
        yaxis: {
            visible: false,
            showgrid: false
        }

    }

    data = [{
        x: x,
        y: y,
        type: 'scatter',
        marker: {
            color: '#3A9188',
            size: 10
        },
        line: {
            color: '#3A9188',
            width: 0.5
        },
        hoverinfo: "y"
    }]

    Plotly.newPlot('plotbox', data, layout);
}


const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.t1', {x: "0%", duration: 0.5, stagger: 0.25});
tl.to('.t2', {x: "0%", duration: 0.5, stagger: 0.25});
tl.to('.t3', {x: "0%", duration: 0.5, stagger: 0.25});
tl.to('.t4', {x: "0%", duration: 0.5, stagger: 0.25});
tl.to('.t5', {x: "0%", duration: 0.5, stagger: 0.25});
tl.to('.t6', {x: "0%", duration: 0.5, stagger: 0.25});
tl.to('.t7', {x: "0%", duration: 0.5, stagger: 0.25});
tl.to('.t8', {x: "0%", duration: 0.5, stagger: 0.25});
tl.to('.introhead', {opacity: 1, duration: 1})
tl.to('.intro', {opacity: 0, duration: 1, })
tl.to('.intro', {zIndex: -10})


document.getElementById('number').onkeydown = function(e) {
    if (!e) e = window.event;
    let keyCode = e.code || e.key;
    if (keyCode == 'Enter'){
      collatzlist = collatz()
    }
}

document.getElementById('headinfo').addEventListener('mouseover', function() {
    document.getElementById('headques').style.display = 'none';
    document.getElementById('headhover').style.display = 'block';
})
document.getElementById('headinfo').addEventListener('mouseleave', function() {
    document.getElementById('headques').style.display = 'flex';
    document.getElementById('headhover').style.display = 'none';
})