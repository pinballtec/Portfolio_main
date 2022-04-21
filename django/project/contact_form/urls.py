from django.urls import path
from .views import main

urlpatterns = [
    path('', main, name='contact_page'),
    # path('success/', success, name='success_page')
]