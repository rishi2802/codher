from django.urls import path

from . import views

urlpatterns=[
    path('',views.home,name='home'),
    path("check",views.check,name='check'),
    path('signup',views.signup,name='signup'),
    path('new',views.new,name='new'),
    path('enter',views.enter,name='enter'),
    path('login',views.login,name='login'),
    path('quest',views.quest,name='quest'),
    path('book',views.book,name='book'),
    path('qu',views.qu,name='qu'),
]