# from django.views.generic import CreateView
# from .models import Contact
# from django.urls import reverse_lazy
# from django.http import HttpResponse
# from django.core.mail import send_mail
# from .forms import ContactForm
from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings


def main(request):
    if request.method == 'POST':
        message = request.POST['message']
        send_mail('Contact_Form', message, settings.EMAIL_HOST_USER, ['daniilboiko99@gmail.com'], fail_silently=False)
    return render(request, 'contact_form/contact_form.html')