from car_filter import Car, CarFilter

cars = [
    Car('Toyota', 'Camry', 25000),
    Car('Honda', 'Civic', 20000),
    Car('Toyota', 'Corolla', 22000),
    Car('Ford', 'Mustang', 30000)
]

filter = CarFilter(cars)

print('Filter by price:')
print(filter.filter_by_price(20000, 25000))
print('Filter by make:')
print(filter.filter_by_make('Toyota'))
print('Filter by model:')
print(filter.filter_by_model('Civic'))
print('Sort by price:')
print(filter.sort_by_price())
print('Sort by make:')
print(filter.sort_by_make())
print('Sort by model:')
print(filter.sort_by_model())
