vector<int> Solution::findOccurences(vector<int> &A) {
    vector<int>res;
    sort(A.begin(),A.end());
    unordered_map<int,int>mp;
    for(auto i :A)mp[i]++;
    for(auto i:A){
        //if res already have that number we dont push again as we set its occurence = -1
        if(mp[i]!=-1)
        res.push_back(mp[i]);
        mp[i]=-1;
    }
    return res;
}
