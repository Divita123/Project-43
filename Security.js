class Security {

    constructor(){

        this.access1 = createInput("Answer 1")
        this.access1.position(280,140);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(280,170);
        this.button1.style('background', 'lightblue');    

        this.access2 = createInput("Answer 2")
        this.access2.position(135,255);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(135,285);
        this.button2.style('background', 'yellow');

        this.access3 = createInput("Answer 3")
        this.access3.position(135,370);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(135,400);
        this.button3.style('background', 'lightpink');
        
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score=score+1;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score=score+1;
            }
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score=score+1;
            }
        });

    }
}