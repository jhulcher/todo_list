class Api::ToDosController < ApplicationController
  def index
    todos = ToDo.all
    render json: todos
  end

  def show
    @todo = ToDo.find(params[:id])
    render json: @todo
  end

  def create
    @todo = ToDo.create!(todo_params)
    render json: @todo
  end

  def update
    @todo = ToDo.find(params[:id])
    @todo.update!(todo_params)
    render json: @todo
  end

  def destroy
    @todo = ToDo.find(params[:id])
    @todo.destroy!
    render json: ToDo.all
  end

  private
  def todo_params
    params.require(:to_do).permit(:title, :body, :done)
  end
end
