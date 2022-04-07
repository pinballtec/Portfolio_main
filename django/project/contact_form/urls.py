from django.urls import path
from .views import ContactCreate, success

urlpatterns = [
    path('', ContactCreate.as_view(), name='contact_page'),
    path('success/', success, name='success_page')
]