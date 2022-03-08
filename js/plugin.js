(function($){
    $.fn.SearchDrop=function(){
        const searchVal=[...arguments];
        let dropDiv=$("<div class='dropDiv'></div>")
        let input =this;
        fillDroppedDiv(searchVal,dropDiv)
    
        let wrapperDiv=$("<div class='wrapperDiv'></div>")
        this.wrap(wrapperDiv)
        this.after(dropDiv)
    
        var marginTop=this.css("marginTop")
        marginTop=PxParse(marginTop)
    
        var marginLeft=this.css("marginLeft")
        marginLeft=PxParse(marginLeft)
    
        dropDiv.css({
            left:marginLeft+"px",
            top:marginTop+this.outerHeight()+"px",
            width:this.outerWidth()+"px"
        })
        $(".dropDiv span").on("click",function(){
            input.val($(this).text())
        })
    
        this.on("focus",function(){
            dropDiv.fadeIn()
        })
        this.on("focusout",function(){
            dropDiv.fadeOut()
        })
        this.on("keyup",function(){
            const inputVal=$(this).val();
            let newList=findLetter(inputVal,searchVal)
           
            dropDiv.html("")
            fillDroppedDiv(newList,dropDiv)
    
            $(".dropDiv span").on("click",function(){
                input.val($(this).text())
            })
    
        })
    }
    
    
        function fillDroppedDiv(arr,drp){
            for( var val of arr){
                drp.append(`<span>${val}</span>`)
            }
        }
    
        function findLetter(letter,list){
            var newList=[];
            for( var item of list){
                if(item.toLowerCase().startsWith(letter.toLowerCase())){
                    newList.push(item)
                }
            }
            return newList
    
        }
    
    
     function PxParse(value){
        return Number(value.slice(0,value.length-2)) 
    
     }
    
    }(jQuery))