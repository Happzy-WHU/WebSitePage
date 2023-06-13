from flask import Flask,send_file, jsonify
from flask import request
from  src.revChatGPT.V3 import getRetMsg


app=Flask(__name__)

@app.route('/prompt',methods=["post"])
def func():
    import pdb
    pdb.set_trace()
    print(request.get_json())
    # images的shape是(2, 512, 512, 3), images[0]的shape是(512, 512, 3)
    msg = getRetMsg(request.get_json())
    print(msg)
    return msg

if __name__=='__main__':

    app.run(host='0.0.0.0',debug=True,port='8000')
