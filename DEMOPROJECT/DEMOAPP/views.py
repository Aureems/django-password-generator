from django.shortcuts import render
from django.http import HttpResponse
import random
# Create your views here.
def hi(request):
    return render(request, 'DEMOAPP/hi.html')



def about(request):
    characters = list('abcdefghijklmnopqrstuvwxyz')

    if request.GET.get('uppercase'):
        characters.extend(list('ABCDEFGHIJKLMNOPQRSTUVWXYZ'))
    if request.GET.get('special'):
        characters.extend(list('~!@#$%^&*'))
    if request.GET.get('numbers'):
        characters.extend(list('123456789'))

    length = int(request.GET.get('length',12))

    thepassword = ''
    for x in range(length):
        thepassword += random.choice(characters)

    return render(request, 'DEMOAPP/about.html', {'password': thepassword})

def aprasymas(request):
    return render(request, 'DEMOAPP/aprasymas.html')