from django.contrib import admin
from django.urls import path, re_path
from django.conf import settings
from django.conf.urls.static import static

from youtube_assistant import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.message_list),
    re_path(r'^api/youtube_assistant/(\d+)$', views.message_detail),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)