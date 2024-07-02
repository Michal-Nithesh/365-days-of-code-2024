l=$(awk ‘NR==1 {print $1}’ input)
r=$(awk ‘NR==1 {print $2}’ input)
awk ‘NR==’$l’, NR==’$r’ {print $0}’ input
