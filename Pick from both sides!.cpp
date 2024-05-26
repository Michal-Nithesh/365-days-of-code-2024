int Solution::solve(vector<int> &A, int B) {
int i=0,j=A.size()-1;
int n1=A.size();
vector<int>pre;
int sum=0;
for(int i=0;i<B;i++)
{
    sum+=A[i];
    pre.push_back(sum);
}
int ans=-1e8;
sum=0;
for(int i=0;i<=B;i++)
{
    ans=max(ans,sum+pre[B-i-1]);
    sum+=A[n1-i-1];
}
    return ans;
}
