gsap.from(".whoBox", {duration:1.5, opacity:0, ease:"back", y:150, stagger:.5, repeat:1});

//gsap.from - where its coming from - ease:how it lands, stagger gives a delay

gsap.from(".step", {duration:1.5, opacity:0, y:-150, ease:"back", stagger:1, repeat:2});