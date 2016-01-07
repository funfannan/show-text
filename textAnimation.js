var showText = function (target, message, index, interval) {  
	var inB = 0;
  if(index < message.length) {
        if(message[index] == "$" || message[index] == "?" || message[index] == "!") {
            switch(message[index]) {
                case "$":
                $(target).append("<br>");
                message[index++];
                break;
               
                case "!":
				inB = 1;
                $(target).append("<b></b>");
                message[index++];
                break;
               
                case "?":
                inB = 0;
                message[index++];
            }
        } else {
            $(target).append(message[index++]);
        }
	if(inB == 0){
		setTimeout(function () { showText(target, message, index, interval); }, interval);
	}
    else {
		setTimeout(function () { showTextinB(target, message, index, interval); }, interval);
	}
   
  }
}

var showTextinB = function (target, message, index, interval) {  
	var temp;
	if(index < message.length) {
		if(message[index] == "$" || message[index] == "?" || message[index] == "!") {
			switch(message[index]) {
				case "$":
				$(target).append("<br>");
				message[index++];
				break;
			   
				case "!":
				$(target).append("<b></b>");
				message[index++];
				break;
			   
				case "?":
				message[index++];
				setTimeout(function () { showText(target, message, index, interval); }, interval);
			}
			
		} else {
			temp = $(target).html();
			$(target).html(temp.substr(0, temp.length - 4) + message[index++] + temp.substr(temp.length - 4, temp.length));
			setTimeout(function () { showTextinB(target, message, index, interval); }, interval);
		}

	}
}

function singPrint(targetz, stringhez, intervalloz, startz) {
	setTimeout(function () { showText(targetz, stringhez, 0, intervalloz); }, startz);
}


/* Array elementi */

var t = [
	"#first",
	"#second"
]

var s = [

	/* Array stringhe*/
	" Print this first line one character at a time",
	" print this second line one character at a time with break-line (<br>) $ and!bold? "
	];

	

function singClear(targetz) {
	$(targetz).html("");
}
