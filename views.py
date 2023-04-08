from django.shortcuts import render
import django
import mysql.connector as mc
con=mc.connect(host="localhost",user="root",password="1234",database="sample")
cur=con.cursor()
# Create your views here.
def home(request):
    return render(request,'index.html')
def check(request):
    
    con=mc.connect(host="localhost",user="root",password="1234",database="sample")
    cur=con.cursor()
    cur.execute("select * from admin")
    v=[]
    v=cur.fetchall()
    em= request.POST["email"]
    pwd=request.POST["pwd"]
    for i in v:
        if i[0]==em and i[1]==pwd :
            class share:
                name:str
                desc:str
            cur.execute("select * from share")
            v=[]
            shares=[]
            obj=share()
            v=cur.fetchall()
            for info in v:
                obj.name=info[0]
                obj.desc=info[1]
                shares.append(obj)
                print(obj.name,obj.desc)
            return render(request,'forum.html',{'shares':v})
            return render(request,'forum.html')
    return render(request,'home.html')


def signup(request):
    return render(request,'signup.html')

def new(request):
   
    cur.execute("select * from admin")
    v=[]
    v=cur.fetchall()
    i1= request.POST["i1"]
    i2=request.POST["i2"]
    i3= request.POST["i3"]
    i4=request.POST["i4"]
    for i in v:
        if i1==i[2] or i2==i[0]:
            return render(request,'signup.html',{'name':'USER ALREADY EXISTS'})
        elif i3!=i4:
            return render(request,'signup.html',{'name':'PASSWORDS DIFFERENT'})
    query="insert into admin values(%s,%s,%s)"
    val=(i2,i3,i1)
    cur.execute(query,val)
    class share:
        name:str
        desc:str
    cur.execute("select * from share")
    v=[]
    shares=[]
    obj=share()
    v=cur.fetchall()
    for info in v:
        obj.name=info[0]
        obj.desc=info[1]
        shares.append(obj)
        print(obj.name,obj.desc)
    return render(request,'forum.html',{'shares':v})
def login(request):
    
    return render(request,'home.html')
def enter(request):
    v1=request.POST["v1"]
    v2=request.POST["v2"]
    v3=request.POST["v3"]
    from sklearn.linear_model import LinearRegression
    import pandas as pd
    df=pd.read_csv(r"C:\Users\Sai\Desktop\Startups.csv")
    x=df[["R&D Spend","Administration","Marketing Spend"]]
    y=df["Profit"].values
    reg=LinearRegression()
    reg.fit(x,y)
    a=pd.DataFrame({"R&D Spend":[v1],"Administration":[v2],"Marketing Spend":[v3]})
    val=reg.predict(a)
    return render(request,'result.html',{'val':val})
def quest(request):
    return render(request,'questionairre.html')
def qu(request):
    return render(request,'forum.html')
def book(request):
    return render(request,'app.html')