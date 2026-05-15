class Car:
    def __init__(self, make, model, price):
        self.make = make
        self.model = model
        self.price = price

class CarFilter:
    def __init__(self, cars):
        self.cars = cars

    def filter_by_price(self, min_price, max_price):
        return [car for car in self.cars if min_price <= car.price <= max_price]

    def filter_by_make(self, make):
        return [car for car in self.cars if car.make == make]

    def filter_by_model(self, model):
        return [car for car in self.cars if car.model == model]

    def sort_by_price(self, ascending=True):
        return sorted(self.cars, key=lambda x: x.price, reverse=not ascending)

    def sort_by_make(self, ascending=True):
        return sorted(self.cars, key=lambda x: x.make, reverse=not ascending)

    def sort_by_model(self, ascending=True):
        return sorted(self.cars, key=lambda x: x.model, reverse=not ascending)
