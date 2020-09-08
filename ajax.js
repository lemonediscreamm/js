$(document).ready(function() {
                            //チェックボタンをクリック
                    $('#send').change(function(){
                                //checkボタンを押したときdataに１
                                var favorite = $('#send').val();
                                var item_id = $('#item_id').val();
                                var mem_id = $('#mem_id').val();
                                //Ajax通信メソッド
                                $.ajax({
                                    type: "POST",
                                    url: 'ajax.php',
                                    data: 
                                    {'item_id': item_id,
                                    'favorite': favorite,
                                    'mem_id':mem_id
                                    },
                                    //Ajax通信が成功した場合に呼び出されるメソッド
                                    success: function(data){  
                                        //出力部分
                                        console.log(data);
                                    },  
                                    //Ajax通信が失敗した場合に呼び出されるメソッド
                                    error: function(XMLHttpRequest, textStatus, errorThrown){
                                        alert('Error : ' + errorThrown);
                                        $("#XMLHttpRequest").html("XMLHttpRequest : " + XMLHttpRequest.status);
                                        $("#textStatus").html("textStatus : " + textStatus);
                                        $("#errorThrown").html("errorThrown : " + errorThrown);
                                        console.log("処理に失敗しました。");
                                    }
                                });
                            });
});                        
