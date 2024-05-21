import pandas as pd
import chardet

# Détecter l'encodage du fichier CSV
with open(r'projects\data\stocks-analysis\ConceptsAnalyseFondamentale.csv', 'rb') as f:
    result = chardet.detect(f.read())

print(result)

# # Utiliser l'encodage détecté pour lire le fichier CSV
# df = pd.read_csv(r'projects\data\stocks-analysis\ConceptsAnalyseFondamentale.csv', delimiter=";", encoding=result['encoding'])

# # Convertir le DataFrame en tableau HTML
# html_table = df.to_html(index=False, classes='table table-striped table-bordered')

# # Enregistrer le tableau HTML dans un fichier
# with open('tableau.html', 'w', encoding='utf-8') as f:
#     f.write(html_table)
