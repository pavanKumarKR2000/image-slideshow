 var i=0;
                       
                        window.setInterval(function(){
                            if(i>0){
                                document.querySelector('.navigator').children[i-1].style.backgroundColor='transparent';
                            }else if(i==0){
                                document.querySelector('.navigator').children[7].style.backgroundColor='transparent';
                            }
                            document.querySelector('.container').children[i].scrollIntoView({behavior:"smooth"});
                            document.querySelector('.navigator').children[i].style.backgroundColor='white';
                            i++;
                            i=i%( document.querySelector('.container').children.length);
                       },2500);
                    