# %%
import pandas as pd
# %%
d = pd.read_csv('https://docs.google.com/spreadsheets/d/e/2PACX-1vT2wmTemIRnmdmLmcRpsfoDn2clYAt0up0O66JORaIa1hK8UrKSTr2sss4bWDK8fT2c36cBqh4GhzpP/pub?gid=0&single=true&output=csv')
# %%
d
# %%
d.fillna('NA', inplace=True)
# %%
d.to_json('./data.json', force_ascii=False, orient='records')
# %%
