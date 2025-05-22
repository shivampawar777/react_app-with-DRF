from django.urls import path
from .views import StudentList

urlpatterns = [
    path('student/', StudentList.as_view()),
] 