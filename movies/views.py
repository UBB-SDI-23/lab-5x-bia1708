from rest_framework import generics, mixins
from rest_framework.response import Response
from movies.models import  *
from movies.serializer import *
from rest_framework.pagination import PageNumberPagination


class Pagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100


class MovieList(generics.ListCreateAPIView):
    queryset = Movie.objects.all()
    pagination_class = Pagination
    serializer_class = MovieSerializer


class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer


class DirectorList(generics.ListCreateAPIView):
    queryset = Director.objects.all()
    serializer_class = DirectorSerializer
    pagination_class = Pagination


class DirectorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Director.objects.all()
    serializer_class = DirectorSerializer


class ActorList(generics.ListCreateAPIView):
    queryset = Actor.objects.all()
    serializer_class = ActorSerializer
    pagination_class = Pagination


class ActorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Actor.objects.all()
    serializer_class = ActorSerializer


class MoviesWithDirector(generics.RetrieveUpdateDestroyAPIView):
    queryset = Director.objects.all()
    serializer_class = DirectorWithMoviesSerializer
    pagination_class = Pagination


class ActorMovieAddView(generics.ListCreateAPIView):
    queryset = ActorMovie.objects.all()
    serializer_class = ActorMovieSerializer
    pagination_class = Pagination

    def get_queryset(self):
        queryset = super().get_queryset()
        pk = self.kwargs.get('pk')
        if pk is not None:
            queryset = queryset.filter(actor_id=pk)
        return queryset

