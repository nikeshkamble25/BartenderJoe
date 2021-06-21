#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["BartenderJoeApi/BartenderJoeApi.csproj", "BartenderJoeApi/"]
RUN dotnet restore "BartenderJoeApi/BartenderJoeApi.csproj"
COPY . .
WORKDIR "/src/BartenderJoeApi"
RUN dotnet build "BartenderJoeApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BartenderJoeApi.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENV ASPNETCORE_URLS http://*:5000
EXPOSE 5000/tcp
ENTRYPOINT ["dotnet", "BartenderJoeApi.dll"]